import React from 'react';
import { Clock, User, Share2, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const ArticlePage = ({ article }) => {
  // Sample article data for demonstration
  const sampleArticle = {
    title: "Top 5 AI Writing Assistants to Supercharge Your Content Creation",
    author: "Manus AI",
    publishDate: "December 15, 2024",
    readTime: "8 min read",
    category: "Reviews",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
    content: `
      <p>In today's fast-paced digital world, content creation has become more demanding than ever. Whether you're a blogger, marketer, or business owner, the pressure to produce high-quality content consistently can be overwhelming. Fortunately, AI writing assistants have emerged as powerful tools that can help streamline your content creation process and boost your productivity.</p>
      
      <h2>Why AI Writing Assistants Matter</h2>
      <p>AI writing assistants are revolutionizing the way we approach content creation. These sophisticated tools use advanced natural language processing and machine learning algorithms to help writers generate ideas, improve their writing style, and overcome writer's block.</p>
      
      <h2>1. ChatGPT - The Versatile Conversationalist</h2>
      <p>ChatGPT has taken the world by storm with its ability to engage in natural conversations and generate human-like text. This AI assistant excels at brainstorming ideas, creating outlines, and even writing complete articles on various topics.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Natural conversation interface</li>
        <li>Versatile content generation</li>
        <li>Code writing capabilities</li>
        <li>Multiple language support</li>
      </ul>
      
      <h2>2. Jasper AI - The Marketing Specialist</h2>
      <p>Jasper AI is specifically designed for marketing and business content. It offers templates for various content types, from blog posts to social media captions, making it an excellent choice for marketers and business owners.</p>
      
      <h2>3. Copy.ai - The Creative Copywriter</h2>
      <p>Copy.ai focuses on creating compelling copy for marketing campaigns, product descriptions, and sales pages. Its user-friendly interface and specialized templates make it easy to generate persuasive content quickly.</p>
      
      <h2>4. Grammarly - The Writing Enhancer</h2>
      <p>While primarily known as a grammar checker, Grammarly's AI-powered writing assistant goes beyond basic corrections to offer style suggestions, tone adjustments, and clarity improvements.</p>
      
      <h2>5. Writesonic - The All-in-One Solution</h2>
      <p>Writesonic combines multiple AI writing capabilities in one platform, offering everything from blog post generation to ad copy creation and even AI art generation.</p>
      
      <h2>Conclusion</h2>
      <p>AI writing assistants are powerful tools that can significantly enhance your content creation process. By choosing the right tool for your specific needs and learning to use it effectively, you can save time, improve quality, and maintain consistency in your content output.</p>
    `
  };

  const currentArticle = article || sampleArticle;

  const relatedArticles = [
    {
      title: "How to Automate Your Daily Tasks with AI",
      readTime: "12 min read",
      category: "Guides"
    },
    {
      title: "The Best AI Note-Taking Apps for Professionals",
      readTime: "10 min read",
      category: "Reviews"
    },
    {
      title: "AI Tools for Data Analysis: A Complete Guide",
      readTime: "15 min read",
      category: "Reviews"
    }
  ];

  const popularArticles = [
    "Top 10 AI Productivity Tools for 2025",
    "Getting Started with AI Automation",
    "AI vs Human: The Future of Content Creation",
    "Best Practices for AI Tool Integration",
    "Maximizing ROI with AI Productivity Tools"
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-tech-blue">Home</a>
          <ChevronRight className="h-4 w-4" />
          <a href="/reviews" className="hover:text-tech-blue">{currentArticle.category}</a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{currentArticle.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white">
              {/* Article Header */}
              <header className="mb-8">
                <div className="mb-4">
                  <span className="bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentArticle.category}
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {currentArticle.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>By {currentArticle.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{currentArticle.readTime}</span>
                  </div>
                  <span>{currentArticle.publishDate}</span>
                </div>

                <img
                  src={currentArticle.featuredImage}
                  alt={currentArticle.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg mb-8"
                />
              </header>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: currentArticle.content }}
              />

              {/* AdSense In-Content Ad */}
              <div className="my-8 p-4 bg-gray-100 rounded-lg text-center">
                <div className="bg-gray-200 rounded h-64 flex items-center justify-center text-gray-500">
                  AdSense In-Content Ad (300x250)
                </div>
              </div>

              {/* Social Share */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MA
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentArticle.author}</h4>
                    <p className="text-gray-600 text-sm">
                      AI specialist and productivity expert with over 5 years of experience in evaluating and implementing AI tools for businesses and individuals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <span className="text-xs text-tech-blue font-medium">{relatedArticle.category}</span>
                      <h4 className="font-semibold text-gray-900 mt-2 mb-2">{relatedArticle.title}</h4>
                      <p className="text-sm text-gray-500">{relatedArticle.readTime}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* AdSense Rectangle */}
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="bg-gray-200 rounded h-64 flex items-center justify-center text-gray-500 text-sm">
                  AdSense Rectangle (300x250)
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-tech-blue rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-sm mb-4 text-blue-100">
                  Get the latest AI productivity tools and strategies delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                  />
                  <Button className="w-full bg-white text-tech-blue hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Popular Articles */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Articles</h3>
                <ul className="space-y-3">
                  {popularArticles.map((title, index) => (
                    <li key={index}>
                      <a href="#" className="text-sm text-gray-600 hover:text-tech-blue transition-colors">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-tech-blue">AI Writing (12)</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-tech-blue">Project Management (8)</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-tech-blue">Note-Taking (6)</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-tech-blue">Data Analysis (4)</a></li>
                </ul>
              </div>

              {/* Another AdSense Rectangle */}
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="bg-gray-200 rounded h-64 flex items-center justify-center text-gray-500 text-sm">
                  AdSense Rectangle (300x250)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

