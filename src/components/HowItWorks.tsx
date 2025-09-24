import React from 'react';
import { Search, MessageCircle, Calendar, Plane, Stethoscope, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search & Compare',
      description: 'Browse our extensive database of treatments and destinations. Compare prices, facilities, and success rates.',
      details: [
        'Search by treatment type',
        'Compare destinations',
        'View hospital profiles',
        'Check doctor credentials',
        'Read patient reviews'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Get a personalized consultation with our medical tourism experts. Discuss your needs and get recommendations.',
      details: [
        'Free online consultation',
        'Medical history review',
        'Treatment recommendations',
        'Cost estimation',
        'Timeline planning'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Calendar,
      title: 'Plan Your Journey',
      description: 'We create a detailed itinerary including medical appointments, travel arrangements, and accommodation.',
      details: [
        'Customized travel plan',
        'Medical appointment scheduling',
        'Visa assistance',
        'Flight booking',
        'Hotel reservations'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Plane,
      title: 'Travel & Arrival',
      description: 'We handle all travel logistics. Our team meets you at the airport and ensures smooth arrival.',
      details: [
        'Airport pickup service',
        'Hotel check-in assistance',
        'Hospital orientation',
        'Cultural briefing',
        'Local support team'
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Stethoscope,
      title: 'Medical Treatment',
      description: 'Receive world-class medical care at internationally accredited facilities with expert medical teams.',
      details: [
        'Pre-treatment preparation',
        'Medical procedure',
        'Post-operative care',
        '24/7 medical support',
        'Recovery monitoring'
      ],
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Heart,
      title: 'Follow-up & Support',
      description: 'Continuous support even after you return home. We ensure your complete recovery and satisfaction.',
      details: [
        'Return journey coordination',
        'Post-treatment follow-up',
        'Telemedicine consultations',
        'Medication delivery',
        'Ongoing support'
      ],
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 6-step process makes medical tourism accessible and stress-free. 
            From initial consultation to complete recovery, we're with you every step of the way.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 h-full hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    
                    {/* Bullet Points */}
                    <div className="space-y-2">
                      {step.details.slice(0, 2).map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {/* Step Number and Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-3 h-3" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.description}</p>
                    <div className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 max-w-5xl mx-auto border border-blue-200">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Start Your Medical Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our team is ready to guide you through every step of your medical tourism experience. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Journey
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                  Download Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
