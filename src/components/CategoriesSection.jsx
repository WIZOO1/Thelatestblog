import React from 'react';
import { 
  PenTool, 
  Calendar, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Zap, 
  Clock, 
  Palette 
} from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      name: 'AI Writing Tools',
      icon: PenTool,
      description: 'Content creation and writing assistants',
      count: 45,
      color: 'bg-blue-500'
    },
    {
      name: 'Project Management',
      icon: Calendar,
      description: 'Task and project organization tools',
      count: 32,
      color: 'bg-green-500'
    },
    {
      name: 'Note-Taking',
      icon: FileText,
      description: 'Smart note and knowledge management',
      count: 28,
      color: 'bg-purple-500'
    },
    {
      name: 'Data Analysis',
      icon: BarChart3,
      description: 'AI-powered analytics and insights',
      count: 24,
      color: 'bg-orange-500'
    },
    {
      name: 'Communication',
      icon: MessageSquare,
      description: 'AI chatbots and communication tools',
      count: 36,
      color: 'bg-pink-500'
    },
    {
      name: 'Automation',
      icon: Zap,
      description: 'Workflow and process automation',
      count: 41,
      color: 'bg-yellow-500'
    },
    {
      name: 'Time Management',
      icon: Clock,
      description: 'Scheduling and time optimization',
      count: 19,
      color: 'bg-indigo-500'
    },
    {
      name: 'Creative Tools',
      icon: Palette,
      description: 'AI for design and creative work',
      count: 33,
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect AI tools for your specific needs across different productivity categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-tech-blue/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${category.color} bg-opacity-10`}>
                    <IconComponent className={`h-6 w-6 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We're constantly adding new categories and tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-tech-blue text-white px-6 py-3 rounded-lg hover:bg-tech-blue/90 transition-colors">
              Request a Category
            </button>
            <button className="border border-tech-blue text-tech-blue px-6 py-3 rounded-lg hover:bg-tech-blue hover:text-white transition-colors">
              Suggest a Tool
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

