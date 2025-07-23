import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { GenericResponse } from '@/types/services';
import { Waitlist } from '@/types/waitlist';
import { checkBotId } from 'botid/server';
import { validateCSRFToken } from '@/services/auth';

export async function POST(
  req: NextRequest
): Promise<NextResponse<GenericResponse<Waitlist>>> {
  const verification = await checkBotId();

  if (verification.isBot) {
    return NextResponse.json({ message: 'Access denied' }, { status: 403 });
  }

  const isValidToken = await validateCSRFToken(req);
  if (!isValidToken) {
    return NextResponse.json(
      { message: 'Invalid security token' },
      { status: 403 }
    );
  }

  const { email, userAgent, source } = await req.json();
  const ip = req.headers.get('x-forwarded-for') || 'unknown';

  if (!email || !email.includes('@')) {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
  }

  try {
    const entry = await prisma.waitlist.create({
      data: {
        email,
        userAgent,
        ipAddress: ip,
        source,
      },
    });

    return NextResponse.json({
      message: 'Email registered successfully',
      data: entry,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Email already registered or invalid' },
      { status: 400 }
    );
  }
}
