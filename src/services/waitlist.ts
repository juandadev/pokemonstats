import { GenericResponse } from '@/types/services';
import { Waitlist } from '@/types/waitlist';

export async function submitToWaitlist(
  email: string
): Promise<GenericResponse<Waitlist>> {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({
        email,
        userAgent: navigator.userAgent,
        source: 'landing',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: GenericResponse<Waitlist> = await response.json();

    if (!response.ok) {
      return {
        message: data.message,
      };
    }

    return data;
  } catch {
    return {
      message:
        'An error occurred while submitting your email. Please try again later.',
    };
  }
}
