import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import heroImage from '../assets/hero_image.png';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{' '}
                <span className="text-transparent bg-clip-text tech-gradient">
                  AIFlowKit
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Your Ultimate Guide to AI-Powered Productivity Tools
              </p>
              <p className="text-lg text-gray-500 max-w-lg">
                Discover the latest AI tools, in-depth reviews, and proven strategies to supercharge your productivity and transform the way you work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-tech-blue hover:bg-tech-blue/90 text-white px-8 py-3 text-lg"
              >
                Discover the Latest AI Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-3 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-blue">500+</div>
                <div className="text-sm text-gray-600">AI Tools Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-blue">50K+</div>
                <div className="text-sm text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-blue">100+</div>
                <div className="text-sm text-gray-600">Expert Guides</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="AI Productivity Workspace"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-electric-cyan/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
};

export default HeroSection;

