import React from 'react';
import { Calendar, User, ArrowRight, Heart, Plane, Shield, BookOpen } from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: 'All', active: true },
    { name: 'Healthcare', active: false },
    { name: 'Travel Tips', active: false },
    { name: 'Recovery', active: false },
    { name: 'Destinations', active: false }
  ];

  const articles = [
    {
      id: 1,
      title: 'Complete Guide to Medical Tourism in Thailand',
      excerpt: 'Everything you need to know about getting medical treatment in Thailand, from visa requirements to hospital selection.',
      category: 'Destinations',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Post-Surgery Recovery: What to Expect',
      excerpt: 'A comprehensive guide to recovery after medical procedures abroad, including timeline and care tips.',
      category: 'Recovery',
      author: 'Dr. Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Understanding Medical Tourism Insurance',
      excerpt: 'How to choose the right insurance coverage for your medical tourism journey and what to look for.',
      category: 'Healthcare',
      author: 'Lisa Thompson',
      date: '2024-01-10',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Top 10 Hospitals for Cardiac Surgery',
      excerpt: 'Discover the world\'s leading hospitals for heart surgery and what makes them stand out.',
      category: 'Healthcare',
      author: 'Dr. Rajesh Kumar',
      date: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Travel Safety Tips for Medical Tourists',
      excerpt: 'Essential safety guidelines to follow when traveling abroad for medical treatment.',
      category: 'Travel Tips',
      author: 'Mark Wilson',
      date: '2024-01-05',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Cultural Etiquette in Medical Tourism',
      excerpt: 'Understanding cultural differences and how to navigate them during your medical journey.',
      category: 'Travel Tips',
      author: 'Dr. Maria Santos',
      date: '2024-01-03',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const resources = [
    {
      icon: Heart,
      title: 'Medical Tourism Guide',
      description: 'Complete handbook covering all aspects of medical tourism',
      downloadCount: '2.5k downloads'
    },
    {
      icon: Plane,
      title: 'Travel Checklist',
      description: 'Essential items and documents for your medical journey',
      downloadCount: '1.8k downloads'
    },
    {
      icon: Shield,
      title: 'Safety Guidelines',
      description: 'Important safety tips and precautions for medical tourists',
      downloadCount: '1.2k downloads'
    },
    {
      icon: BookOpen,
      title: 'Recovery Handbook',
      description: 'Post-treatment care and recovery guidelines',
      downloadCount: '950 downloads'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Blog & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles, guides, and resources about 
            medical tourism, healthcare abroad, and travel tips.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                category.active
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          {articles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{article.date}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.filter(article => !article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Downloadable Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <div className="text-xs text-gray-500 mb-3">{resource.downloadCount}</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter for the latest medical tourism insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
