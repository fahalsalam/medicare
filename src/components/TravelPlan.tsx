import React from 'react';
import { Plane, MapPin, Stethoscope, Heart, Camera, Home } from 'lucide-react';

const TravelPlan = () => {
  const steps = [
    {
      icon: Plane,
      title: 'Pre-Travel',
      duration: '1-2 weeks',
      description: 'Initial consultation, medical records review, treatment planning, visa assistance, and travel arrangements.',
      details: [
        'Free online consultation with specialists',
        'Medical records evaluation and treatment plan',
        'Visa application assistance',
        'Flight and accommodation booking',
        'Pre-travel health checkup',
        'Travel insurance guidance'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Arrival',
      duration: 'Day 1',
      description: 'Airport pickup, hotel check-in, hospital orientation, and initial medical assessments.',
      details: [
        'Airport pickup and transfer to hotel',
        'Hotel check-in and welcome briefing',
        'Hospital tour and facility orientation',
        'Meeting with medical team',
        'Pre-treatment medical assessments',
        'Cultural orientation and city tour'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Stethoscope,
      title: 'During Treatment',
      duration: '2-7 days',
      description: 'Medical procedures, hospital stay, and immediate post-operative care under expert supervision.',
      details: [
        'Scheduled medical procedures',
        '24/7 medical supervision',
        'Post-operative monitoring',
        'Pain management and medication',
        'Regular health assessments',
        'Family updates and communication'
      ],
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Heart,
      title: 'Recovery & Tourism',
      duration: '3-14 days',
      description: 'Recovery period with optional tourism activities, follow-up appointments, and wellness programs.',
      details: [
        'Recovery monitoring and care',
        'Follow-up medical appointments',
        'Optional sightseeing tours',
        'Wellness and spa treatments',
        'Cultural experiences',
        'Shopping and local cuisine'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Camera,
      title: 'Return & Follow-Up',
      duration: 'Ongoing',
      description: 'Return journey coordination, post-treatment care, and continuous follow-up support.',
      details: [
        'Return flight arrangements',
        'Medical reports and documentation',
        'Post-treatment care instructions',
        'Telemedicine follow-up sessions',
        'Medication delivery service',
        'Ongoing support and consultation'
      ],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="travel-plan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your Medical Tourism Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to complete recovery, we guide you through every step 
            of your medical tourism experience with personalized care and support.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-600 rounded-full z-10 relative">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mr-4`}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                          <p className="text-blue-600 font-medium">{step.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Medical Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a personalized travel plan tailored to your specific medical needs and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Get Free Travel Plan
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-medium">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPlan;
