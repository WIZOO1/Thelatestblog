import React from 'react';
import { Target, Users, Award, Mail } from 'lucide-react';
import { Button } from './ui/button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About AIFlowKit
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted source for AI-powered productivity tools, expert reviews, and proven strategies to transform the way you work.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-tech-blue mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                At AIFlowKit, we believe that artificial intelligence should empower everyone to work smarter, not harder. Our mission is to bridge the gap between cutting-edge AI technology and practical productivity solutions for individuals and businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to providing honest, in-depth reviews and actionable insights that help our readers make informed decisions about AI tools and strategies that can genuinely improve their productivity and quality of life.
              </p>
            </div>
            <div className="bg-gradient-to-br from-tech-blue to-electric-cyan rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">What We Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Comprehensive AI tool reviews and comparisons</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Step-by-step productivity guides and tutorials</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Latest AI trends and industry insights</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Practical strategies for AI implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-tech-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team consists of AI specialists, productivity experts, and technology enthusiasts with years of experience in evaluating and implementing AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-tech-blue rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                MA
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manus AI Team</h3>
              <p className="text-tech-blue font-medium mb-3">AI Specialists & Content Creators</p>
              <p className="text-gray-600 text-sm">
                Our expert team combines deep technical knowledge of AI systems with practical experience in productivity optimization. We test every tool we review and provide honest, unbiased assessments based on real-world usage.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-electric-cyan rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                RC
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Contributors</h3>
              <p className="text-tech-blue font-medium mb-3">Industry Analysts & Researchers</p>
              <p className="text-gray-600 text-sm">
                Our research team continuously monitors the AI landscape, identifying emerging tools and trends. They ensure our content remains current and relevant in the rapidly evolving world of artificial intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-tech-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accuracy</h3>
              <p className="text-gray-600">
                We thoroughly test and verify every tool and strategy we recommend, ensuring our readers receive accurate and reliable information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We clearly disclose any affiliations or partnerships and maintain editorial independence in all our reviews and recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of AI developments, constantly exploring new tools and methodologies to share with our community.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-tech-blue to-electric-cyan rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-xl mb-6 text-blue-100">
            Have questions about AI tools or want to suggest a review? We'd love to hear from you.
          </p>
          <Button className="bg-white text-tech-blue hover:bg-gray-100 px-8 py-3 text-lg">
            Contact Us
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-tech-blue mb-2">500+</div>
            <div className="text-gray-600">AI Tools Reviewed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-tech-blue mb-2">50K+</div>
            <div className="text-gray-600">Monthly Readers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-tech-blue mb-2">100+</div>
            <div className="text-gray-600">Expert Guides</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-tech-blue mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

