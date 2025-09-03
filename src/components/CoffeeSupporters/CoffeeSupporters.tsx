import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CoffeeIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Supporter } from '@/app/api/supporters/route';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

async function getSupporters(): Promise<Supporter[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/supporters`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function CoffeeSupporters() {
  const supporters = await getSupporters();
  const totalAmount = supporters.reduce(
    (sum, supporter) => sum + supporter.amount,
    0
  );

  if (!supporters) {
    return null;
  }

  return (
    <Card className="mb-12 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CoffeeIcon className="h-5 w-5 text-yellow-500" />
          Recent Supporters
          <Badge className="bg-yellow-100 text-yellow-800 ml-2">
            ${totalAmount} raised
          </Badge>
        </CardTitle>
        <p className="text-gray-600">
          Thank you to everyone who has supported the project! Your
          contributions help keep Pokemon Stats free and ad-free.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {supporters.map((donation) => (
            <div
              key={donation.id}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
            >
              <div className="size-12 rounded-full bg-yellow-200">
                <CoffeeIcon className="w-6 h-6 text-yellow-500 m-3" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-1">
                  <span className="font-semibold text-gray-900">
                    {donation.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(donation.createdAt, {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{donation.message}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-yellow-700">
                  ${donation.amount}
                </div>
                <div className="text-xs text-gray-500">donation</div>
              </div>
            </div>
          ))}

          <div className="text-center pt-4">
            <Button
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <a
                href="https://buymeacoffee.com/juandadotdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CoffeeIcon className="w-5 h-5 mr-2" />
                Support the Project
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
