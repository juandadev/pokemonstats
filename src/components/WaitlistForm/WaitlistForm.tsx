'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail, Shield, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import TwitterIcon from '@/icons/TwitterIcon';
import Link from 'next/link';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <div className="order-1 lg:order-2">
      <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the Waitlist
                </h2>
                <p className="text-gray-600">
                  Be the first to know when the new version launches!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Joining...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Join Waitlist
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>1,247 trainers waiting</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>No spam, ever</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                You&apos;re on the list! 🎉
              </h2>
              <p className="text-gray-600 mb-4">
                Thanks for joining! We&apos;ll notify you as soon as the new
                Pokemon Stats is ready.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-green-800 mb-3">
                  <strong>What&apos;s next?</strong> Keep an eye on your inbox
                  for updates on our progress and exclusive early access!
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-green-700">
                  <TwitterIcon className="w-4 h-4" />
                  <span>
                    Follow me on X / Twitter for frequent development updates!
                  </span>
                </div>
              </div>
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                asChild
              >
                <Link
                  href="https://x.com/juandadotdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="w-4 h-4 mr-2" />
                  Follow @juandadotdev
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
