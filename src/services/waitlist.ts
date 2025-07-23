// noinspection ExceptionCaughtLocallyJS

import React from 'react';
import { GenericResponse } from '@/types/services';
import { Waitlist } from '@/types/waitlist';

export async function submitToWaitlist(
  email: string,
  csrfToken: string,
  setCsrfToken: React.Dispatch<React.SetStateAction<string | null>>
): Promise<GenericResponse<Waitlist>> {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({
        email,
        source: 'landing',
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
      },
    });

    const data: GenericResponse<Waitlist> = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    fetch('/api/waitlist/token', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) setCsrfToken(data.token);
      })
      .catch((err) => {
        console.error('Failed to refresh CSRF token:', err);
      });

    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'An error occurred while submitting your email. Please try again later.'
    );
  }
}
