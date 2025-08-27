import React from 'react';
import { Twitter, Linkedin, Rss } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Sitemap', href: '/sitemap.xml' }
  ];

  const categories = [
    { name: 'AI Writing', href: '/category/ai-writing' },
    { name: 'Project Management', href: '/category/project-management' },
    { name: 'Note-Taking', href: '/category/note-taking' },
    { name: 'Data Analysis', href: '/category/data-analysis' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' }
  ];

  return (
    <footer className="bg-gray-50 border-t">
      {/* Footer Banner Ad Placeholder */}
      <div className="w-full bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <div className="bg-gray-200 rounded h-20 flex items-center justify-center text-gray-500 text-sm">
            AdSense Footer Banner (728x90)
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="AIFlowKit" className="h-10 w-10 mr-3" />
              <span className="text-xl font-bold text-tech-blue">AIFlowKit</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your ultimate guide to AI-powered productivity tools. Discover the latest AI tools, reviews, and strategies to boost your productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-tech-blue text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-600 hover:text-tech-blue text-sm transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-tech-blue text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2025 AIFlowKit.xyz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

