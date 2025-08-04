// noinspection ExceptionCaughtLocallyJS

import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

class NotVerified extends CredentialsSignin {
  code = 'You must be on the verified waitlist to access the beta.';
}

class RequiredFields extends CredentialsSignin {
  code = 'Email and password are required';
}

class NameRequired extends CredentialsSignin {
  code = 'Name is required for registration';
}

class NoAccount extends CredentialsSignin {
  code = 'No account found. Please register first.';
}

class InvalidPassword extends CredentialsSignin {
  code = 'Invalid password';
}

class UserExists extends CredentialsSignin {
  code = 'User already exists. Please login instead.';
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        name: { label: 'Name', type: 'text' },
        action: { label: 'Action', type: 'hidden' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new RequiredFields();
        }

        const { email, password, name, action } = credentials;

        try {
          // Check if user is in waitlist and verified
          const waitlistEntry = await prisma.waitlist.findUnique({
            where: { email: email as string },
          });

          if (!waitlistEntry || waitlistEntry.status !== 'VERIFIED') {
            throw new NotVerified();
          }

          if (action === 'register') {
            if (!name) {
              throw new NameRequired();
            }

            const existingUser = await prisma.user.findUnique({
              where: { email: email as string },
            });

            if (existingUser) {
              throw new UserExists();
            }

            const hashedPassword = await bcrypt.hash(password as string, 12);

            const user = await prisma.user.create({
              data: {
                email: email as string,
                password: hashedPassword as string,
                name: name as string,
              },
            });

            return {
              id: user.id,
              email: user.email,
              name: user.name,
            };
          } else {
            // Login logic
            const user = await prisma.user.findUnique({
              where: { email: email as string },
            });

            if (!user) {
              throw new NoAccount();
            }

            const isValidPassword = await bcrypt.compare(
              password as string,
              user.password
            );

            if (!isValidPassword) {
              throw new InvalidPassword();
            }

            return {
              id: user.id,
              email: user.email,
              name: user.name,
            };
          }
        } catch (error) {
          console.error('Auth error:', error);
          throw error;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user!.id = token.id as string;
      }
      return session;
    },
  },
});
