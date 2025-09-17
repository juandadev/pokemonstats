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
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-green-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to waitlist</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Privacy & Security
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information during the Pokemon Stats
            beta testing period.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            <strong>Last updated:</strong> January 2025 •{' '}
            <strong>Effective:</strong> January 2025
          </div>
        </div>

        {/* Beta Notice */}
        <Card className="mb-8 shadow-lg border-0 bg-orange-50/80 backdrop-blur-sm border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-orange-900 mb-2">
                  Beta Testing Privacy Notice
                </h3>
                <p className="text-orange-800 mb-3">
                  This privacy policy specifically covers our beta testing
                  program. We collect minimal information solely to provide
                  access to selected testers and may remove all beta user data
                  once the app launches publicly.
                </p>
                <p className="text-orange-800">
                  The final Pokemon Stats app will not require user accounts and
                  will have a separate, simplified privacy policy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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
                  Beta Testing Account Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Email Address:</strong>
                      <span className="text-gray-700 ml-2">
                        Used for beta access notifications, account
                        verification, and important updates about the testing
                        program.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Full Name:</strong>
                      <span className="text-gray-700 ml-2">
                        Used to personalize communications and identify beta
                        testers in our internal systems.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">
                        Password (Hashed):
                      </strong>
                      <span className="text-gray-700 ml-2">
                        Securely stored using industry-standard encryption. We
                        never store passwords in plain text.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">
                        Google Account Info (if used):
                      </strong>
                      <span className="text-gray-700 ml-2">
                        Basic profile information (name, email) when signing up
                        with Google OAuth.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-500" />
                  Usage Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">
                        Beta Testing Activity:
                      </strong>
                      <span className="text-gray-700 ml-2">
                        Features used, bugs encountered, and feedback provided
                        to improve the app.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">
                        Technical Information:
                      </strong>
                      <span className="text-gray-700 ml-2">
                        Browser type, device information, and error logs to
                        identify and fix issues.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Beta Testing Purposes
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Provide access to beta features
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Send testing instructions and updates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Collect feedback and bug reports
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Analyze usage patterns for improvements
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Communication
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Beta program notifications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Important security updates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Launch announcements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Development progress updates (if opted in)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
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
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Security Measures
                  </h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Industry-standard encryption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      <span>Secure password hashing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      <span>Protected database access</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    Access Control
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Limited team access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Activity monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Regular security audits</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What We Don't Do
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    • We never sell your personal information to third parties
                  </li>
                  <li>
                    • We don't use your data for advertising or marketing to
                    external companies
                  </li>
                  <li>
                    • We don't share your information with Pokemon-related
                    companies or Nintendo
                  </li>
                  <li>
                    • We don't store unnecessary personal information beyond
                    what's needed for beta testing
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention & Deletion */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-orange-500" />
                Data Retention & Deletion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Beta Data Lifecycle
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-orange-900">
                        During Beta Testing:
                      </strong>
                      <p className="text-orange-800 mt-1">
                        Your data is stored securely and used only for providing
                        beta access and collecting feedback.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-orange-900">
                        At Public Launch:
                      </strong>
                      <p className="text-orange-800 mt-1">
                        We may delete all beta user accounts and associated data
                        since the public app won't require user accounts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-orange-900">Your Choice:</strong>
                      <p className="text-orange-800 mt-1">
                        You can request immediate deletion of your beta account
                        data at any time by contacting us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Data We Keep Temporarily
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Account credentials (until launch)</li>
                    <li>• Beta feedback and bug reports</li>
                    <li>• Usage analytics (anonymized)</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Data We Delete
                  </h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Personal account information</li>
                    <li>• Email addresses (unless opted in for updates)</li>
                    <li>• Individual usage patterns</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                Your Rights & Choices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    You Have the Right To:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Eye className="w-3 h-3 text-purple-600" />
                      </div>
                      <div>
                        <strong className="text-gray-900">
                          Access your data
                        </strong>
                        <p className="text-sm text-gray-600">
                          Request a copy of all data we have about you
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Trash2 className="w-3 h-3 text-purple-600" />
                      </div>
                      <div>
                        <strong className="text-gray-900">
                          Delete your account
                        </strong>
                        <p className="text-sm text-gray-600">
                          Remove all your data from our systems immediately
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-3 h-3 text-purple-600" />
                      </div>
                      <div>
                        <strong className="text-gray-900">
                          Opt out of communications
                        </strong>
                        <p className="text-sm text-gray-600">
                          Stop receiving beta updates and notifications
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How to Exercise Your Rights:
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-3">
                      Contact us at any time to exercise your privacy rights:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <a
                          href="mailto:privacy@pokemonstats.com"
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          privacy@pokemonstats.com
                        </a>
                      </div>
                      <p className="text-sm text-gray-600">
                        We'll respond to your request within 48 hours during the
                        beta period.
                      </p>
                    </div>
                  </div>
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
                  We're committed to transparency about how we handle your data
                  during the beta testing period. If you have any questions or
                  concerns, please don't hesitate to reach out.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
                    <div className="text-2xl mb-2">📧</div>
                    <div className="text-sm font-semibold text-gray-900">
                      Email Us
                    </div>
                    <div className="text-xs text-gray-600">
                      privacy@pokemonstats.com
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                    <div className="text-2xl mb-2">🔄</div>
                    <div className="text-sm font-semibold text-gray-900">
                      Policy Updates
                    </div>
                    <div className="text-xs text-gray-600">
                      We'll notify you of any changes
                    </div>
                  </div>
                </div>

                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={() =>
                    (window.location.href = 'mailto:privacy@pokemonstats.com')
                  }
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/terms">
            <Button
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl"
            >
              View Terms of Service
            </Button>
          </Link>
          <Link href="/waitlist">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl">
              Back to Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
