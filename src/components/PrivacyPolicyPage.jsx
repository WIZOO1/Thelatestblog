import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-tech-blue mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Last updated: December 15, 2024
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            At AIFlowKit, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-tech-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Name and email address when you subscribe to our newsletter</li>
                <li>Contact information when you fill out our contact form</li>
                <li>Comments and feedback you provide on our articles</li>
                <li>Any other information you choose to provide when communicating with us</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website and search terms used</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Analytics</h3>
              <p className="text-gray-600">
                We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site. We use this information to improve our website and content.
              </p>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-tech-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-tech-blue/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Operations</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Provide and maintain our website</li>
                  <li>• Improve user experience</li>
                  <li>• Analyze website usage and performance</li>
                  <li>• Troubleshoot technical issues</li>
                </ul>
              </div>

              <div className="bg-tech-blue/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Send newsletters and updates</li>
                  <li>• Respond to inquiries and comments</li>
                  <li>• Notify about new content and features</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>

              <div className="bg-tech-blue/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Personalization</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Recommend relevant articles</li>
                  <li>• Customize user experience</li>
                  <li>• Display targeted advertisements</li>
                  <li>• Improve content relevance</li>
                </ul>
              </div>

              <div className="bg-tech-blue/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Comply with legal obligations</li>
                  <li>• Protect our rights and property</li>
                  <li>• Prevent fraud and abuse</li>
                  <li>• Enforce our terms of service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Are Cookies?</h3>
              <p className="text-gray-600">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how our site is used.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                <p className="text-gray-600 text-sm">Required for basic website functionality and cannot be disabled.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                <p className="text-gray-600 text-sm">Help us understand how visitors interact with our website through Google Analytics.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Advertising Cookies</h4>
                <p className="text-gray-600 text-sm">Used by Google AdSense to display relevant advertisements based on your interests.</p>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Google AdSense</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our site or other sites.
                </p>
                <p className="text-gray-600 text-sm">
                  You can opt out of personalized advertising by visiting Google's Ads Settings.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Analytics</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We use Google Analytics to analyze website traffic and user behavior. This helps us improve our content and user experience.
                </p>
                <p className="text-gray-600 text-sm">
                  You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-tech-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information</li>
                <li>Secure hosting infrastructure</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Access and Update</h3>
                <p className="text-gray-600 text-sm">You can request access to or updates of your personal information by contacting us.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Unsubscribe</h3>
                <p className="text-gray-600 text-sm">You can unsubscribe from our newsletter at any time using the unsubscribe link in our emails.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Cookie Control</h3>
                <p className="text-gray-600 text-sm">You can control cookies through your browser settings, though this may affect website functionality.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Data Deletion</h3>
                <p className="text-gray-600 text-sm">You can request deletion of your personal information, subject to legal and legitimate business requirements.</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@aiflowkit.xyz</p>
                <p><strong>Website:</strong> <a href="/contact" className="text-tech-blue hover:underline">Contact Form</a></p>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-tech-blue/5 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

