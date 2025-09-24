import React, { useState } from 'react';
import { Heart, Bone, Eye, Baby, Smile, Zap, Check, Star } from 'lucide-react';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'cardiac', name: 'Cardiac' },
    { id: 'orthopedic', name: 'Orthopedic' },
    { id: 'cosmetic', name: 'Cosmetic' },
    { id: 'fertility', name: 'Fertility' },
    { id: 'oncology', name: 'Oncology' }
  ];

  const packages = [
    {
      id: 1,
      category: 'cardiac',
      icon: Heart,
      title: 'Knee Replacement Surgery',
      location: 'Thailand',
      duration: '10 days',
      price: 5500,
      originalPrice: 18000,
      savings: '70%',
      rating: 4.9,
      reviews: 1247,
      includes: [
        'Surgery with experienced orthopedic surgeon',
        '5-star hospital accommodation',
        'Pre & post-operative care',
        'Airport transfers',
        'Hotel stay for companion',
        'Follow-up consultations',
        'Physical therapy sessions'
      ],
      highlights: ['JCI Accredited Hospital', 'English Speaking Staff', 'Free WiFi'],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      category: 'cardiac',
      icon: Heart,
      title: 'Cardiac Bypass Surgery',
      location: 'India',
      duration: '14 days',
      price: 8500,
      originalPrice: 25000,
      savings: '66%',
      rating: 4.8,
      reviews: 892,
      includes: [
        'Open heart surgery by cardiothoracic surgeon',
        'ICU stay and monitoring',
        'Pre-operative cardiac evaluation',
        'Post-operative rehabilitation',
        'Airport transfers',
        'Hotel accommodation',
        '24/7 medical support'
      ],
      highlights: ['World-renowned Cardiologist', 'State-of-art ICU', 'Family Support'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      category: 'cosmetic',
      icon: Smile,
      title: 'Hair Transplant',
      location: 'Turkey',
      duration: '7 days',
      price: 3200,
      originalPrice: 12000,
      savings: '73%',
      rating: 4.9,
      reviews: 2156,
      includes: [
        'FUE hair transplant procedure',
        'Expert plastic surgeon',
        'Post-operative care kit',
        'Airport transfers',
        'Hotel accommodation',
        'Follow-up consultations',
        'Hair care instructions'
      ],
      highlights: ['FUE Technique', 'Natural Results', 'Minimal Downtime'],
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      category: 'fertility',
      icon: Baby,
      title: 'IVF Treatment',
      location: 'Mexico',
      duration: '21 days',
      price: 4800,
      originalPrice: 15000,
      savings: '68%',
      rating: 4.7,
      reviews: 634,
      includes: [
        'Complete IVF cycle',
        'Fertility specialist consultation',
        'Laboratory procedures',
        'Embryo transfer',
        'Pregnancy testing',
        'Hotel accommodation',
        'Emotional support counseling'
      ],
      highlights: ['High Success Rate', 'Modern Lab', 'Comprehensive Care'],
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      category: 'orthopedic',
      icon: Bone,
      title: 'Hip Replacement',
      location: 'UAE',
      duration: '12 days',
      price: 7200,
      originalPrice: 22000,
      savings: '67%',
      rating: 4.8,
      reviews: 743,
      includes: [
        'Total hip replacement surgery',
        'Orthopedic surgeon consultation',
        'Physical therapy program',
        'Airport transfers',
        'Luxury hotel stay',
        'Follow-up care',
        'Pain management'
      ],
      highlights: ['Minimally Invasive', 'Quick Recovery', 'Luxury Facilities'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      category: 'oncology',
      icon: Zap,
      title: 'Cancer Treatment',
      location: 'India',
      duration: '30 days',
      price: 12000,
      originalPrice: 45000,
      savings: '73%',
      rating: 4.9,
      reviews: 456,
      includes: [
        'Oncology consultation',
        'Chemotherapy/Radiation therapy',
        'Medical oncology support',
        'Accommodation for patient & family',
        'Airport transfers',
        'Psychological counseling',
        'Nutritional support'
      ],
      highlights: ['Advanced Technology', 'Multidisciplinary Team', 'Family Support'],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredPackages = selectedCategory === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Treatment & Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All-inclusive medical tourism packages combining world-class treatment 
            with comfortable accommodation and travel arrangements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
              {/* Package Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save {pkg.savings}
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <pkg.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">{pkg.location}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">${pkg.price.toLocaleString()}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">${pkg.originalPrice.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Duration: {pkg.duration}</span>
                  <span className="text-sm text-gray-600">{pkg.reviews} reviews</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Package Includes:</h4>
                  <div className="space-y-1">
                    {pkg.includes.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                    {pkg.includes.length > 3 && (
                      <span className="text-sm text-blue-600">+{pkg.includes.length - 3} more</span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Don't See Your Treatment?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer customized packages for a wide range of medical procedures. 
              Contact us for a personalized quote.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Request Custom Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
