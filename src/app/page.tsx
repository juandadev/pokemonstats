import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sparkles,
  Zap,
  Shield,
  Clock,
  AlertCircle,
  StarIcon,
  HeartIcon,
} from 'lucide-react';
import TwitterIcon from '@/icons/TwitterIcon';
import Link from 'next/link';

export default function WaitlistPage() {
  // const [email, setEmail] = useState('');
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  //
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!email) return;
  //
  //   setIsLoading(true);
  //
  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  //
  //   setIsSubmitted(true);
  //   setIsLoading(false);
  //   setEmail('');
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-green-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 items-center mb-16">
          {/* Left side - Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Subtle background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl scale-150 opacity-30"></div>

              {/* Main illustration */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img
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

          {/* Right side - Waitlist Form */}
          {/*<div className="order-1 lg:order-2">*/}
          {/*  <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">*/}
          {/*    <CardContent className="p-8">*/}
          {/*      {!isSubmitted ? (*/}
          {/*        <>*/}
          {/*          <div className="text-center mb-6">*/}
          {/*            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">*/}
          {/*              <Mail className="w-8 h-8 text-white" />*/}
          {/*            </div>*/}
          {/*            <h2 className="text-2xl font-bold text-gray-900 mb-2">*/}
          {/*              Join the Waitlist*/}
          {/*            </h2>*/}
          {/*            <p className="text-gray-600">*/}
          {/*              Be the first to know when the new version launches!*/}
          {/*            </p>*/}
          {/*          </div>*/}

          {/*          <form onSubmit={handleSubmit} className="space-y-4">*/}
          {/*            <div>*/}
          {/*              <Input*/}
          {/*                type="email"*/}
          {/*                placeholder="Enter your email address"*/}
          {/*                value={email}*/}
          {/*                onChange={(e) => setEmail(e.target.value)}*/}
          {/*                className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"*/}
          {/*                required*/}
          {/*              />*/}
          {/*            </div>*/}

          {/*            <Button*/}
          {/*              type="submit"*/}
          {/*              disabled={isLoading || !email}*/}
          {/*              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"*/}
          {/*            >*/}
          {/*              {isLoading ? (*/}
          {/*                <div className="flex items-center gap-2">*/}
          {/*                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>*/}
          {/*                  Joining...*/}
          {/*                </div>*/}
          {/*              ) : (*/}
          {/*                <div className="flex items-center gap-2">*/}
          {/*                  <Mail className="w-5 h-5" />*/}
          {/*                  Join Waitlist*/}
          {/*                </div>*/}
          {/*              )}*/}
          {/*            </Button>*/}
          {/*          </form>*/}

          {/*          <div className="mt-6 pt-6 border-t border-gray-200">*/}
          {/*            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">*/}
          {/*              <div className="flex items-center gap-1">*/}
          {/*                <Users className="w-4 h-4" />*/}
          {/*                <span>1,247 trainers waiting</span>*/}
          {/*              </div>*/}
          {/*              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>*/}
          {/*              <div className="flex items-center gap-1">*/}
          {/*                <Shield className="w-4 h-4" />*/}
          {/*                <span>No spam, ever</span>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </>*/}
          {/*      ) : (*/}
          {/*        <div className="text-center py-4">*/}
          {/*          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">*/}
          {/*            <CheckCircle className="w-8 h-8 text-green-600" />*/}
          {/*          </div>*/}
          {/*          <h2 className="text-2xl font-bold text-gray-900 mb-2">*/}
          {/*            You&apos;re on the list! 🎉*/}
          {/*          </h2>*/}
          {/*          <p className="text-gray-600 mb-4">*/}
          {/*            Thanks for joining! We&apos;ll notify you as soon as the*/}
          {/*            new Pokemon Stats is ready.*/}
          {/*          </p>*/}
          {/*          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">*/}
          {/*            <p className="text-sm text-green-800 mb-3">*/}
          {/*              <strong>What&apos;s next?</strong> Keep an eye on your*/}
          {/*              inbox for updates on our progress and exclusive early*/}
          {/*              access!*/}
          {/*            </p>*/}
          {/*            <div className="flex items-center justify-center gap-2 text-sm text-green-700">*/}
          {/*              <Twitter className="w-4 h-4" />*/}
          {/*              <span>*/}
          {/*                Follow me on Twitter for frequent development updates!*/}
          {/*              </span>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*          <Button*/}
          {/*            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"*/}
          {/*            onClick={() =>*/}
          {/*              window.open(*/}
          {/*                'https://twitter.com/yourusername',*/}
          {/*                '_blank'*/}
          {/*              )*/}
          {/*            }*/}
          {/*          >*/}
          {/*            <Twitter className="w-4 h-4 mr-2" />*/}
          {/*            Follow @yourusername*/}
          {/*          </Button>*/}
          {/*        </div>*/}
          {/*      )}*/}
          {/*    </CardContent>*/}
          {/*  </Card>*/}
          {/*</div>*/}
        </div>

        {/* What's Coming Section */}
        <Card className="mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What&apos;s Coming in the New Version
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re rebuilding from the ground up with exciting new
                features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Dual-Type Analysis
                </h3>
                <p className="text-sm text-gray-600">
                  Advanced type effectiveness calculator for single and
                  dual-type combinations with real-time multipliers.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Enhanced UI/UX
                </h3>
                <p className="text-sm text-gray-600">
                  Completely redesigned interface with smooth animations, better
                  mobile experience, and intuitive navigation.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  More Features
                </h3>
                <p className="text-sm text-gray-600">
                  Evolution details, base stats visualization, search
                  improvements, and many more quality-of-life updates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Issues Notice */}
        <Card className="mb-16 shadow-lg border-0 bg-orange-50/80 backdrop-blur-sm border-orange-200">
          <CardContent className="p-6">
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

        {/* Follow Progress Section */}
        <Card className="mb-16 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-sm border border-blue-200">
          <CardContent className="p-8">
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
                  Follow @juandadotdev on X (formerly Twitter)
                </Link>
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                Join 300+ developers following the journey
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
