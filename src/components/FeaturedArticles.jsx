import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Clock, User } from 'lucide-react';

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Top 5 AI Writing Assistants to Supercharge Your Content Creation",
      excerpt: "Discover the most powerful AI writing tools that can help you create compelling content faster than ever before.",
      author: "Manus AI",
      readTime: "8 min read",
      category: "Reviews",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "How to Automate Your Daily Tasks with AI: A Beginner's Guide",
      excerpt: "Learn practical strategies to leverage AI automation tools and reclaim hours of your day.",
      author: "Manus AI",
      readTime: "12 min read",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "The Best AI Note-Taking Apps for Students and Professionals",
      excerpt: "Compare the top AI-powered note-taking applications that can transform how you capture and organize information.",
      author: "Manus AI",
      readTime: "10 min read",
      category: "Reviews",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest AI productivity tools, reviews, and strategies from our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              className={`group cursor-pointer ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      index === 0 ? 'h-64 lg:h-80' : 'h-48'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-tech-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  {article.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-electric-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-tech-blue transition-colors ${
                    index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'
                  }`}>
                    {article.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 ${
                    index === 0 ? 'text-base lg:text-lg' : 'text-sm'
                  }`}>
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-tech-blue hover:text-tech-blue/80">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;

