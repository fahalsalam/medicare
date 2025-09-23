import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      age: 45,
      procedure: 'Cardiac Bypass Surgery',
      location: 'Bangkok, Thailand',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The care I received was exceptional. The surgical team was world-class and the facility was better than many hospitals back home. I saved over $60,000 and received premium treatment.',
      savings: '$62,000 saved',
      date: '3 months ago'
    },
    {
      name: 'Robert Chen',
      age: 52,
      procedure: 'Knee Replacement',
      location: 'New Delhi, India',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'From initial consultation to post-surgery care, everything was seamlessly managed. The doctor explained every detail and the recovery was faster than expected.',
      savings: '$35,000 saved',
      date: '6 months ago'
    },
    {
      name: 'Lisa Thompson',
      age: 38,
      procedure: 'IVF Treatment',
      location: 'Mexico City, Mexico',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'After multiple failed attempts in the US, we found success here. The fertility clinic had state-of-the-art technology and the most caring staff. Our dream came true!',
      savings: '$25,000 saved',
      date: '1 year ago'
    },
    {
      name: 'Michael Johnson',
      age: 41,
      procedure: 'Hair Transplant',
      location: 'Istanbul, Turkey',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The results exceeded my expectations. The surgeon was an artist and the entire process was comfortable. Six months later, I have a full head of hair and my confidence back.',
      savings: '$15,000 saved',
      date: '8 months ago'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from thousands of satisfied patients who have transformed their lives 
            through our medical tourism programs worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {testimonial.name}, {testimonial.age}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-blue-600 font-semibold text-sm mb-1">
                    {testimonial.procedure}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location} • {testimonial.date}
                  </p>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-1" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonial.testimonial}"
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.savings}
                </span>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                  Read Full Story →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Join Thousands of Satisfied Patients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-green-500 mb-1">15,000+</div>
              <div className="text-gray-600 text-sm">Procedures Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-gray-600 text-sm">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">$180M</div>
              <div className="text-gray-600 text-sm">Total Savings</div>
            </div>
          </div>
          <button className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;