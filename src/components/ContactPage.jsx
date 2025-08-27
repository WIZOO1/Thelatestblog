import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about AI tools, want to suggest a review, or need help with productivity strategies? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-tech-blue mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="tool-review">Request a Tool Review</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white py-3 text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-tech-blue to-electric-cyan rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Get in Touch</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-blue-100">contact@aiflowkit.xyz</p>
                    <p className="text-blue-100 text-sm">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-blue-100">Monday - Friday: 9 AM - 6 PM EST</p>
                    <p className="text-blue-100 text-sm">Weekend inquiries answered on Monday</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-blue-100">Remote Team</p>
                    <p className="text-blue-100 text-sm">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How do you select tools to review?</h4>
                  <p className="text-gray-600 text-sm">
                    We evaluate tools based on user demand, innovation, and potential impact on productivity. We also consider community suggestions and emerging trends in the AI space.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Do you accept sponsored reviews?</h4>
                  <p className="text-gray-600 text-sm">
                    We maintain editorial independence. While we may have affiliate partnerships, all reviews are based on honest evaluation and user experience.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Can I suggest a tool for review?</h4>
                  <p className="text-gray-600 text-sm">
                    Absolutely! We welcome tool suggestions from our community. Use the contact form above with "Request a Tool Review" as the subject.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Do you offer consulting services?</h4>
                  <p className="text-gray-600 text-sm">
                    Currently, we focus on content creation and reviews. For specific consulting needs, please reach out and we'll discuss potential collaboration opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest AI tool reviews, productivity tips, and industry insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                />
                <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

