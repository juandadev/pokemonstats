import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, Github, Sparkles, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import TwitterIcon from '@/icons/TwitterIcon';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative z-10 container mx-auto px-4 pt-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            404 - Page Not Found
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! This Pokémon escaped! 🏃‍♂️💨
          </h2>

          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have wandered off into the
            tall grass.
          </p>

          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Don&apos;t worry though - even the best trainers sometimes take a
            wrong turn!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Main illustration */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <Image
                  width={240}
                  height={370}
                  sizes="(max-width: 768px) 240px, (min-width: 768px) 288px"
                  src="/not-found.webp"
                  alt="Lost Pokémon Trainer"
                  className="w-60 md:w-72 h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 -right-4 animate-bounce">
                <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="absolute bottom-20 -left-6 animate-pulse">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Question marks floating around */}
              <div
                className="absolute top-1/4 left-8 text-4xl text-gray-400 animate-bounce"
                style={{ animationDelay: '0.5s' }}
              >
                ?
              </div>
              <div
                className="absolute top-1/3 right-12 text-3xl text-gray-400 animate-bounce"
                style={{ animationDelay: '1s' }}
              >
                ?
              </div>
              <div
                className="absolute bottom-1/3 left-16 text-2xl text-gray-400 animate-bounce"
                style={{ animationDelay: '1.5s' }}
              >
                ?
              </div>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Let&apos;s get you back on track!
                  </h3>
                </div>

                <div className="space-y-4">
                  <Button
                    className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <Link href="/">
                      <Home className="w-5 h-5 mr-2" />
                      Go to Homepage
                    </Link>
                  </Button>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Or follow our development progress:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-200 hover:border-blue-300 hover:bg-blue-50 rounded-lg bg-transparent"
                        asChild
                      >
                        <Link
                          href="https://x.com/juandadotdev"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TwitterIcon className="w-4 h-4 mr-2" />X / Twitter
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-lg bg-transparent"
                        asChild
                      >
                        <Link
                          href="https://github.com/juandadev/pokemonstats"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fun Pokémon Facts Section */}
        <Card className="mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                While you&apos;re here... 🤔
              </h2>
              <p className="text-lg text-gray-600">
                Did you know these fun Pokémon facts?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Pikachu&apos;s Name
                </h3>
                <p className="text-sm text-gray-600">
                  Pikachu&apos;s name comes from &quot;pika&quot; (the sound of
                  electricity) and &quot;chu&quot; (the sound a mouse makes)!
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Type Effectiveness
                </h3>
                <p className="text-sm text-gray-600">
                  There are 324 possible type combinations, but only 171 have
                  been used in official Pokémon games!
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  First Games
                </h3>
                <p className="text-sm text-gray-600">
                  Pokémon Red and Green were released in Japan in 1996, making
                  the franchise over 25 years old!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Site Status Section */}
        <Card className="mb-16 shadow-xl bg-gradient-to-br from-orange-50 to-red-50 backdrop-blur-sm border border-orange-200">
          <CardContent>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pokemon Stats is Getting an Upgrade!
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                We&apos;re currently rebuilding the entire app with better
                features, improved design, and enhanced performance. The old
                version had some issues, so we took it offline temporarily.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-orange-200">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm font-semibold text-gray-900">
                    What&apos;s Coming
                  </div>
                  <div className="text-xs text-gray-600">
                    Dual-type analysis, better UI, mobile optimization
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Follow Progress
                  </div>
                  <div className="text-xs text-gray-600">
                    Daily updates on Twitter about development
                  </div>
                </div>
              </div>

              {/*<Link href="/waitlist">*/}
              {/*  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">*/}
              {/*    <Mail className="w-6 h-6 mr-3" />*/}
              {/*    Join the Waitlist*/}
              {/*  </Button>*/}
              {/*</Link>*/}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
