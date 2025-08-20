'use client';

import Link from 'next/link';
import { MailIcon, SquareArrowOutUpRightIcon } from 'lucide-react';
import React from 'react';
import { useSession } from 'next-auth/react';

export default function SignInCard() {
  const { data: session } = useSession();

  return (
    <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-sm text-gray-600">Already have an account?</span>
      </div>
      <Link
        href={session?.user ? '/app' : '/auth/signin'}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-700 hover:to-yellow-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
      >
        {session?.user ? (
          <>
            <SquareArrowOutUpRightIcon className="w-4 h-4" />
            Try the beta
          </>
        ) : (
          <>
            <MailIcon className="w-4 h-4" />
            Sign In
          </>
        )}
      </Link>
    </div>
  );
}
