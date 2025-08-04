// noinspection ExceptionCaughtLocallyJS

import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

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
          throw new Error('Email and password are required');
        }

        const { email, password, name, action } = credentials;

        try {
          // Check if user is in waitlist and verified
          const waitlistEntry = await prisma.waitlist.findUnique({
            where: { email: email as string },
          });

          if (!waitlistEntry || waitlistEntry.status !== 'VERIFIED') {
            throw new Error(
              'You must be on the verified waitlist to access the beta.'
            );
          }

          if (action === 'register') {
            if (!name) {
              throw new Error('Name is required for registration');
            }

            const existingUser = await prisma.user.findUnique({
              where: { email: email as string },
            });

            if (existingUser) {
              throw new Error('User already exists. Please login instead.');
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
              throw new Error('No account found. Please register first.');
            }

            const isValidPassword = await bcrypt.compare(
              password as string,
              user.password
            );

            if (!isValidPassword) {
              throw new Error('Invalid password');
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
