'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function CoffeeSupporters() {
  const [donations, setDonations] = useState<any[]>([]);
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API calls - in real implementation, these would be:
        // const donationsResponse = await fetch('/api/donations')
        // const contributorsResponse = await fetch('https://api.github.com/repos/username/pokemon-stats/contributors')

        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock donations data
        setDonations([
          {
            id: 1,
            name: 'Alex Chen',
            amount: 25,
            message:
              'Love the type effectiveness calculator! Keep up the great work! ⚡',
            date: '2024-01-15',
            avatar: '/placeholder.svg?height=40&width=40&text=AC',
          },
          {
            id: 2,
            name: 'Sarah Johnson',
            amount: 10,
            message: 'This app helped me build my competitive team. Thank you!',
            date: '2024-01-12',
            avatar: '/placeholder.svg?height=40&width=40&text=SJ',
          },
          {
            id: 3,
            name: 'Mike Rodriguez',
            amount: 50,
            message: 'Amazing work on the evolution chains! 🔥',
            date: '2024-01-10',
            avatar: '/placeholder.svg?height=40&width=40&text=MR',
          },
          {
            id: 4,
            name: 'Emma Wilson',
            amount: 15,
            message: 'The mobile experience is fantastic!',
            date: '2024-01-08',
            avatar: '/placeholder.svg?height=40&width=40&text=EW',
          },
          {
            id: 5,
            name: 'David Kim',
            amount: 30,
            message: "Best Pokédex app I've used. Thanks for making it free!",
            date: '2024-01-05',
            avatar: '/placeholder.svg?height=40&width=40&text=DK',
          },
        ]);

        setTotalDonations(130); // Sum of all donations
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="mb-12 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-yellow-500" />
          Recent Supporters
          <Badge className="bg-yellow-100 text-yellow-800 ml-2">
            ${totalDonations} raised
          </Badge>
        </CardTitle>
        <p className="text-gray-600">
          Thank you to everyone who has supported the project! Your
          contributions help keep Pokemon Stats free and ad-free.
        </p>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {donations.map((donation) => (
              <div
                key={donation.id}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
              >
                <img
                  src={donation.avatar || '/placeholder.svg'}
                  alt={donation.name}
                  className="w-12 h-12 rounded-full bg-yellow-200"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">
                      {donation.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {donation.date}
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
                  <Coffee className="w-5 h-5 mr-2" />
                  Support the Project
                </a>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
