import React from 'react';
import { MapPin, Star, Award, Clock } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      country: 'Thailand',
      city: 'Bangkok',
      image: 'https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=800',
      hospitals: '25+ Partner Hospitals',
      rating: '4.9',
      specialties: ['Cardiac Surgery', 'Cosmetic Surgery', 'Orthopedics'],
      savings: 'Up to 75% savings',
      travelTime: '12-24 hours from US'
    },
    {
      country: 'India',
      city: 'New Delhi',
      image: 'https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=800',
      hospitals: '30+ Partner Hospitals',
      rating: '4.8',
      specialties: ['Cancer Treatment', 'Fertility', 'Eye Surgery'],
      savings: 'Up to 80% savings',
      travelTime: '15-20 hours from US'
    },
    {
      country: 'Turkey',
      city: 'Istanbul',
      image: 'https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=800',
      hospitals: '20+ Partner Hospitals',
      rating: '4.9',
      specialties: ['Hair Transplant', 'Dental Care', 'Cosmetic Surgery'],
      savings: 'Up to 70% savings',
      travelTime: '8-12 hours from US'
    },
    {
      country: 'Mexico',
      city: 'Tijuana',
      image: 'https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=800',
      hospitals: '15+ Partner Hospitals',
      rating: '4.7',
      specialties: ['Dental Care', 'Weight Loss Surgery', 'Cosmetic Surgery'],
      savings: 'Up to 65% savings',
      travelTime: '2-6 hours from US'
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Trusted Medical Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our carefully selected destinations offer world-class healthcare facilities 
            with internationally accredited hospitals and experienced medical professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.savings}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-800">
                    {destination.city}, {destination.country}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{destination.hospitals}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{destination.travelTime}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Popular Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
                  Explore {destination.country}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;