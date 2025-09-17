'use client';

import {
  ArrowLeft,
  Shield,
  Eye,
  Database,
  Trash2,
  Clock,
  Mail,
  Lock,
  Users,
  AlertTriangle,
  HandHelpingIcon,
  ChartSplineIcon,
  HatGlassesIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative z-10 container mx-auto pb-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Pokémon Stats</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Privacy & Security
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span>Privacy Policy</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hey there 👋 I want to keep things simple and transparent. Pokémon
            Stats is a free fan-made project, built out of love for Pokémon and
            designed to help players have a smoother experience.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Because I want to keep improving the app (UI, UX, features,
            performance, etc.), I use{' '}
            <a
              href="https://databuddy.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Databuddy
            </a>{' '}
            to understand how people interact with the site. Don’t worry, no
            personal data is collected, everything is anonymous.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            <strong>Last updated:</strong> September 2025 •{' '}
            <strong>Effective:</strong> September 2025
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-500" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  Here’s the type of data Databuddy collects:
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Page Views:</strong>
                      <span className="text-gray-700 ml-2">
                        URL, page title, referrer, timestamp, session ID
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Session:</strong>
                      <span className="text-gray-700 ml-2">
                        duration, start/end times, number of pages visited,
                        bounce detection
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Interactions:</strong>
                      <span className="text-gray-700 ml-2">
                        clicks on buttons/links, element IDs/classes, form
                        submissions (success/failure)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Outbound Links:</strong>
                      <span className="text-gray-700 ml-2">
                        target URL, link text, page where the click happened
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Engagement:</strong>
                      <span className="text-gray-700 ml-2">
                        time on page, scroll depth, mouse movements, interaction
                        patterns
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Performance:</strong>
                      <span className="text-gray-700 ml-2">
                        page load time, first paint, resource timing, DOM
                        content loaded
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Bounce Rate:</strong>
                      <span className="text-gray-700 ml-2">
                        single-page sessions, time spent, engagement threshold
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <HandHelpingIcon className="w-5 h-5 text-purple-500" />
                  All this data helps me:
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-900">
                        Improve design and usability
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-900">
                        Find pain points or confusing areas
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-900">
                        Add new features based on real usage
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-900">
                        Keep performance smooth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span>
                No ads, no reselling, no hidden tracking. Just honest analytics
                to make the site better for everyone.
              </span>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-red-500" />
                Data Security & Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>
                        No IP addresses, emails, or personal identifiers are
                        stored.
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChartSplineIcon className="w-4 h-4" />
                      <span>All analytics are aggregated and anonymized.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HatGlassesIcon className="w-4 h-4" />
                      <span>
                        You cannot be personally identified from this data.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Updates */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-sm border border-blue-200">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Questions About Privacy?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We&apos;re committed to transparency about how we handle your
                  data. If you have any questions or concerns, please don&apos;t
                  hesitate to reach out.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
                    <div className="text-2xl mb-2">📧</div>
                    <div className="text-sm font-semibold text-gray-900">
                      Email Us
                    </div>
                    <div className="text-xs text-gray-600">
                      juanda.martinezn@gmail.com
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                    <div className="text-2xl mb-2">🔄</div>
                    <div className="text-sm font-semibold text-gray-900">
                      Policy Updates
                    </div>
                    <div className="text-xs text-gray-600">
                      We&apos;ll notify you of any changes
                    </div>
                  </div>
                </div>

                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a href="mailto:juanda.martinezn@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Privacy Team
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
