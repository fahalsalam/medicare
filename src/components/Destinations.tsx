import React from 'react';
import { MapPin, Star, Award, Clock } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Destinations = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  const destinations = [
        {
          country: 'India',
          city: 'New Delhi',
          image: 'https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg?auto=compress&cs=tinysrgb&w=800',
          hospitals: '30+ Partner Hospitals',
          rating: '4.8',
          specialties: ['Cardiac Surgery', 'Cancer Treatment', 'Orthopedics', 'Fertility'],
          savings: 'Up to 80% savings',
          travelTime: '15-20 hours from US',
          visaInfo: 'Medical Visa Required',
          highlights: ['JCI Accredited', 'English Speaking', 'Cultural Heritage']
        },
        {
          country: 'UAE',
          city: 'Dubai',
          image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800',
          hospitals: '25+ Partner Hospitals',
          rating: '4.9',
          specialties: ['Cosmetic Surgery', 'Cardiology', 'Orthopedics', 'Dental Care'],
          savings: 'Up to 70% savings',
          travelTime: '12-16 hours from US',
          visaInfo: 'Visa on Arrival',
          highlights: ['Luxury Facilities', 'No Language Barrier', 'Modern Infrastructure']
        },
        {
          country: 'Thailand',
          city: 'Bangkok',
          image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
          hospitals: '25+ Partner Hospitals',
          rating: '4.9',
          specialties: ['Cosmetic Surgery', 'Dental Care', 'Fertility', 'Wellness'],
          savings: 'Up to 75% savings',
          travelTime: '12-24 hours from US',
          visaInfo: 'Visa on Arrival',
          highlights: ['Tourism Friendly', 'Affordable', 'High Quality Care']
        },
        {
          country: 'Turkey',
          city: 'Istanbul',
          image: 'https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&w=800',
          hospitals: '20+ Partner Hospitals',
          rating: '4.9',
          specialties: ['Hair Transplant', 'Dental Care', 'Cosmetic Surgery', 'Eye Surgery'],
          savings: 'Up to 70% savings',
          travelTime: '8-12 hours from US',
          visaInfo: 'e-Visa Available',
          highlights: ['Hair Transplant Experts', 'Cultural Experience', 'Affordable Luxury']
        }
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.savings}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
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
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
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