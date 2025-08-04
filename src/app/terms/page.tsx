import {
  ArrowLeft,
  FileText,
  Users,
  Shield,
  AlertTriangle,
  Clock,
  Mail,
  Gavel,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TwitterIcon from '@/icons/TwitterIcon';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-green-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Legal Terms
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These terms govern your participation in the Pokemon Stats beta
            testing program and use of our services.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            <strong>Last updated:</strong> August 2025 •{' '}
            <strong>Effective:</strong> August 2025
          </div>
        </div>

        {/* Beta Notice */}
        <Card className="mb-8 shadow-lg border-0 bg-blue-50/80 backdrop-blur-sm border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Beta Testing Agreement
                </h3>
                <p className="text-blue-800 mb-3">
                  These terms specifically cover our beta testing program. By
                  creating an account, you agree to test pre-release features
                  and provide feedback to help us improve Pokemon Stats.
                </p>
                <p className="text-blue-800">
                  These terms will be replaced with simpler terms when the app
                  launches publicly without user accounts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-blue-500" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                By creating an account for the Pokemon Stats beta testing
                program, you agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not create an account or
                use our beta services.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What You&apos;re Agreeing To:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Participate in beta testing in good faith</li>
                  <li>• Provide constructive feedback when possible</li>
                  <li>• Use the service responsibly and legally</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Beta Testing Program */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Beta Testing Program
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Purpose & Scope
                </h3>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                  <p className="text-gray-700 mb-3">
                    The Pokemon Stats beta testing program is designed to gather
                    feedback and identify issues before our public launch. As a
                    beta tester, you&apos;ll have early access to features that
                    may be incomplete or contain bugs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">
                        What You Get:
                      </h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Early access to new features</li>
                        <li>• Direct influence on development</li>
                        <li>• Priority support during testing</li>
                        <li>• Recognition as a beta contributor</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        What We Expect:
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Test features thoroughly</li>
                        <li>• Report bugs and issues</li>
                        <li>• Provide constructive feedback</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Beta Limitations
                </h3>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-2">
                        Important Disclaimers:
                      </h4>
                      <ul className="text-orange-800 space-y-1">
                        <li>
                          • Beta features may be incomplete, unstable, or
                          removed without notice
                        </li>
                        <li>
                          • Service availability is not guaranteed during
                          testing
                        </li>
                        <li>• Data may be reset or lost during development</li>
                        <li>
                          • Features may change significantly before public
                          launch
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-500" />
                    Appropriate Use
                  </h3>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-green-800 mb-3">
                      Use the beta service responsibly and constructively.
                    </p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Test features as intended</li>
                      <li>• Provide honest, helpful feedback</li>
                      <li>• Report security issues privately</li>
                      <li>• Respect other beta testers</li>
                      <li>• Don&apos;t share your beta access with others</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Prohibited Activities
                </h3>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <p className="text-red-800 mb-3">
                    The following activities are not permitted during beta
                    testing:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Attempting to hack or exploit the service</li>
                      <li>• Sharing login credentials with others</li>
                      <li>• Using the service for commercial purposes</li>
                    </ul>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Violating intellectual property rights</li>
                      <li>• Harassing other users or our team</li>
                      <li>• Spreading malware or harmful content</li>
                      <li>• Violating any applicable laws</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-500" />
                Intellectual Property & Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Pokemon Stats Ownership
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-3">
                    Pokémon Stats is an independent, unofficial application
                    created for educational and entertainment purposes. While
                    the project is released under the GNU General Public
                    License, we retain authorship over the original codebase,
                    design, and content we have created.
                  </p>
                  <p className="text-gray-700 mb-3">
                    By participating in the beta program, you acknowledge that
                    any feedback or suggestions you provide may be used to
                    improve the project without obligation of compensation or
                    attribution, unless explicitly agreed otherwise.
                  </p>
                  <p className="text-gray-700">
                    All contributions to the project (e.g., code, documentation)
                    are subject to the terms of the GPL license.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Pokemon Trademark Disclaimer
                </h3>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-yellow-800 mb-2">
                        <strong>Important:</strong> Pokemon Stats is not
                        affiliated with, endorsed by, or sponsored by Nintendo,
                        Game Freak, or The Pokemon Company.
                      </p>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>
                          • Pokemon is a trademark of Nintendo/Game Freak/The
                          Pokemon Company
                        </li>
                        <li>
                          • We use Pokemon data under fair use for educational
                          purposes
                        </li>
                        <li>
                          • All Pokemon names, images, and data belong to their
                          respective owners
                        </li>
                        <li>
                          • This is a fan-made tool, not an official Pokemon
                          product
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                Service Availability & Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Beta Period
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <ul className="text-blue-800 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Beta testing period is temporary and will end at
                          public launch
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Service may be unavailable during development and
                          updates
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          We&apos;ll provide reasonable notice before ending the
                          beta program
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Account Termination
                  </h3>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <p className="text-purple-800 mb-3">
                      We may terminate beta access if you:
                    </p>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Violate these terms of service</li>
                      <li>• Engage in prohibited activities</li>
                      <li>• Breach confidentiality agreements</li>
                      <li>• Are inactive for extended periods</li>
                    </ul>
                    <p className="text-purple-800 mt-3 text-sm">
                      You may also delete your account at any time.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Data Handling at Beta End
                </h3>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                  <p className="text-orange-800 mb-3">
                    When the beta program ends and we launch publicly:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-2">
                        What Happens:
                      </h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Beta accounts will be deleted</li>
                        <li>• Personal data will be removed</li>
                        <li>• The public app won&apos;t require accounts</li>
                        <li>
                          • You&apos;ll receive launch notifications (if opted
                          in)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-2">
                        What We Keep:
                      </h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Anonymized feedback and bug reports</li>
                        <li>• General usage statistics</li>
                        <li>• Lessons learned for future development</li>
                        <li>• Gratitude for your contributions! 🙏</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-500" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h3 className="font-semibold text-red-900 mb-3">
                  Beta Software Disclaimer
                </h3>
                <p className="text-red-800 mb-3">
                  Pokemon Stats beta is provided &quot;as is&quot; without
                  warranties of any kind. Since this is pre-release software:
                </p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>
                    • We cannot guarantee the service will be error-free or
                    always available
                  </li>
                  <li>• Features may not work as expected or may be removed</li>
                  <li>
                    • We are not liable for any data loss or service
                    interruptions
                  </li>
                  <li>• Use the beta service at your own risk</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Our Commitment
                </h3>
                <p className="text-gray-700">
                  While we limit our legal liability, we are committed to
                  providing the best possible beta experience. We&apos;ll work
                  diligently to fix bugs, address feedback, and communicate
                  openly about development progress.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Changes */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50 backdrop-blur-sm border-green-200">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Questions About These Terms?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We want to be transparent about the beta testing process. If
                  you have questions about these terms or need clarification on
                  anything, please reach out to us.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-3xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200">
                    <div className="text-2xl mb-2">📧</div>
                    <div className="text-sm font-semibold text-gray-900">
                      General Questions
                    </div>
                    <div className="text-xs text-gray-600">
                      juanda.martinezn@gmail.com
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                    <div className="text-2xl mb-2">🔄</div>
                    <div className="text-sm font-semibold text-gray-900">
                      Terms Updates
                    </div>
                    <div className="text-xs text-gray-600">
                      We&apos;ll notify you of changes
                    </div>
                  </div>
                </div>

                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="https://x.com/juandadotdev">
                    <TwitterIcon className="w-5 h-5 mr-2 shrink-0" />
                    Follow on Twitter
                  </Link>
                </Button>

                <div className="mt-6 p-4 bg-white/60 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Changes to Terms:</strong> We may update these terms
                    during the beta period. We&apos;ll notify all beta testers
                    of significant changes via email and require acceptance of
                    updated terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/privacy">
            <Button
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl"
            >
              View Privacy Policy
            </Button>
          </Link>
          <Link href="/">
            <Button className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white rounded-xl">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
