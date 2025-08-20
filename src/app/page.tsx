import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sparkles,
  Zap,
  Clock,
  AlertCircle,
  StarIcon,
  HeartIcon,
  MailIcon,
} from 'lucide-react';
import TwitterIcon from '@/icons/TwitterIcon';
import Link from 'next/link';
import WaitlistForm from '@/components/WaitlistForm/WaitlistForm';
import Image from 'next/image';
import ProjectProgress from '@/components/Landing/ProjectProgress/ProjectProgress';
import SignInCard from '@/components/SignInCard/SignInCard';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative z-10 container mx-auto pt-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Temporarily Unavailable
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Pokémon{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Stats
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            We&apos;re giving our Pokédex a major upgrade!
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The current version has some issues, so we&apos;ve temporarily taken
            it offline while we build something amazing for you.
          </p>
        </div>

        <div className="text-center mb-8">
          <SignInCard />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center mb-16">
          {/* Left side - Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main illustration */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <Image
                  priority
                  width={384}
                  height={384}
                  sizes="(min-width: 768px) 384px, (max-width: 768px) 320px"
                  src="/hero.webp"
                  alt="Pokémon Trainer with Pikachu"
                  className="w-80 md:w-96 h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 -right-4 animate-bounce">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-yellow-800" />
                </div>
              </div>

              <div className="absolute bottom-20 -left-6 animate-pulse">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <WaitlistForm />
        </div>

        <ProjectProgress />

        {/* Follow Progress Section */}
        <Card className="mb-16 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-sm border border-blue-200">
          <CardContent className="pb-8 px-3 md:px-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TwitterIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Follow the Development Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                I&apos;m sharing frequent updates about the redesign progress,
                sneak peeks of new features, and behind-the-scenes development
                insights on Twitter.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Development Updates
                  </div>
                  <div className="text-xs text-gray-600">
                    Daily progress reports
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl mb-2">👀</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Sneak Peeks
                  </div>
                  <div className="text-xs text-gray-600">
                    Preview new features early
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Direct Feedback
                  </div>
                  <div className="text-xs text-gray-600">
                    Share your thoughts & ideas
                  </div>
                </div>
              </div>

              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link
                  href="https://x.com/juandadotdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="w-6 h-6 mr-3" />
                  Follow @juandadotdev
                </Link>
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                Join 300+ developers following the journey
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Current Issues Notice */}
        <Card className="mb-16 shadow-lg border-0 bg-orange-50/80 backdrop-blur-sm border-orange-200">
          <CardContent className="py-2 px-3 md:px-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-orange-900 mb-2">
                  Why is the site temporarily down?
                </h3>
                <p className="text-orange-800 mb-3">
                  The current version has several issues including outdated type
                  effectiveness data, mobile responsiveness problems, and
                  performance issues that were affecting the user experience.
                </p>
                <p className="text-orange-800">
                  Rather than letting users struggle with these problems, we
                  decided to take the site offline temporarily while we build a
                  much better version that you&apos;ll love.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Stay Connected & Support the Project
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link
                href="https://x.com/juandadotdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-5 h-5 mr-2" />
                Follow on X
              </Link>
            </Button>
            <Button
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link
                href="https://github.com/juandadev/pokemonstats"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StarIcon className="w-5 h-5 mr-2 text-yellow-500" />
                Star on GitHub
              </Link>
            </Button>
            <Button variant={'outline'} asChild>
              <Link
                href="https://buymeacoffee.com/juandadotdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeartIcon className="w-5 h-5 mr-2 text-fairy" />
                Support Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
