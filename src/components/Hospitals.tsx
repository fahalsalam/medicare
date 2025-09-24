import { useState } from 'react';
import { Star, MapPin, Award, Users, Shield, Download } from 'lucide-react';

const Hospitals = () => {
  const hospitals = [
    {
      id: 1,
      name: 'Apollo Hospitals',
      location: 'New Delhi, India',
      rating: 4.9,
      reviews: 2847,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Cardiac Surgery', 'Oncology', 'Orthopedics', 'Neurology'],
      accreditations: ['JCI', 'NABH', 'ISO 9001:2015'],
      established: '1983',
      beds: '10,000+',
      doctors: '7,000+',
      description: 'One of India\'s largest healthcare groups with world-class facilities and internationally trained doctors.',
      highlights: ['24/7 Emergency', 'International Patients', 'English Speaking Staff', 'Modern Technology']
    },
    {
      id: 2,
      name: 'Bumrungrad International Hospital',
      location: 'Bangkok, Thailand',
      rating: 4.8,
      reviews: 1923,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Cosmetic Surgery', 'Dental Care', 'Fertility', 'Wellness'],
      accreditations: ['JCI', 'HAI', 'ISO 15189'],
      established: '1980',
      beds: '580',
      doctors: '1,200+',
      description: 'Thailand\'s premier international hospital with state-of-the-art facilities and multilingual staff.',
      highlights: ['Tourism Friendly', 'Luxury Facilities', 'No Language Barrier', 'Quick Recovery']
    },
    {
      id: 3,
      name: 'American Hospital Dubai',
      location: 'Dubai, UAE',
      rating: 4.9,
      reviews: 1456,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Cardiology', 'Orthopedics', 'Dental Care', 'Cosmetic Surgery'],
      accreditations: ['JCI', 'CAP', 'ISO 9001:2015'],
      established: '1996',
      beds: '254',
      doctors: '400+',
      description: 'Leading private hospital in Dubai offering world-class healthcare with American standards.',
      highlights: ['Luxury Care', 'Modern Infrastructure', 'International Standards', 'Comprehensive Services']
    }
    // {
    //   id: 4,
    //   name: 'Memorial Hospital', 
    //   location: 'Istanbul, Turkey',
    //   rating: 4.7,
    //   reviews: 987,
    //   image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   specialties: ['Hair Transplant', 'Dental Care', 'Eye Surgery', 'Cosmetic Surgery'],
    //   accreditations: ['JCI', 'ISO 9001:2015', 'ISO 14001'],
    //   established: '2000',
    //   beds: '200',
    //   doctors: '300+',
    //   description: 'Specialized in aesthetic and reconstructive surgery with internationally renowned specialists.',
    //   highlights: ['Hair Transplant Experts', 'Affordable Luxury', 'Cultural Experience', 'High Success Rate']
    // },
    // {
    //   id: 5,
    //   name: 'Fortis Healthcare',
    //   location: 'Mumbai, India',
    //   rating: 4.8,
    //   reviews: 2234,
    //   image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   specialties: ['Cardiac Surgery', 'Cancer Treatment', 'Orthopedics', 'Neurology'],
    //   accreditations: ['JCI', 'NABH', 'ISO 9001:2015'],
    //   established: '1996',
    //   beds: '4,000+',
    //   doctors: '3,000+',
    //   description: 'Leading healthcare provider with advanced technology and expert medical professionals.',
    //   highlights: ['Advanced Technology', 'Expert Doctors', 'Comprehensive Care', 'Patient Safety']
    // },
    // {
    //   id: 6,
    //   name: 'Bangkok Hospital',
    //   location: 'Bangkok, Thailand',
    //   rating: 4.8,
    //   reviews: 1678,
    //   image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   specialties: ['Fertility', 'Wellness', 'Dental Care', 'Cosmetic Surgery'],
    //   accreditations: ['JCI', 'HAI', 'ISO 9001:2015'],
    //   established: '1972',
    //   beds: '1,000+',
    //   doctors: '2,000+',
    //   description: 'Thailand\'s largest private hospital network with comprehensive medical services.',
    //   highlights: ['Comprehensive Services', 'Tourism Integration', 'Affordable Care', 'Quality Standards']
    // }
  ];

  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const specialties = [
    'all', 'Cardiac Surgery', 'Oncology', 'Orthopedics', 'Neurology', 
    'Cosmetic Surgery', 'Dental Care', 'Fertility', 'Wellness', 
    'Hair Transplant', 'Eye Surgery'
  ];

  const locations = ['all', 'India', 'Thailand', 'UAE', 'Turkey'];

  const filteredHospitals = hospitals.filter(hospital => {
    const specialtyMatch = selectedSpecialty === 'all' || hospital.specialties.includes(selectedSpecialty);
    const locationMatch = selectedLocation === 'all' || hospital.location.includes(selectedLocation);
    return specialtyMatch && locationMatch;
  });

  return (
    <section id="hospitals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Partner Hospitals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our network of internationally accredited hospitals provides world-class medical care 
            with state-of-the-art facilities and expert medical professionals.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Specialties</option>
              {specialties.slice(1).map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Locations</option>
              {locations.slice(1).map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Hospitals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Hospital Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{hospital.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {hospital.reviews} reviews
                </div>
              </div>

              {/* Hospital Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-500">{hospital.location}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{hospital.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{hospital.description}</p>

                {/* Hospital Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{hospital.beds}</div>
                    <div className="text-xs text-gray-500">Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{hospital.doctors}</div>
                    <div className="text-xs text-gray-500">Doctors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{hospital.established}</div>
                    <div className="text-xs text-gray-500">Est.</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {hospital.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Accreditations */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Accreditations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {hospital.accreditations.map((accred, idx) => (
                      <span 
                        key={idx}
                        className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                      >
                        {accred}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <div className="space-y-1">
                    {hospital.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                    View Details
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Help Choosing a Hospital?
            </h3>
            <p className="text-gray-600 mb-6">
              Our medical tourism experts can help you find the perfect hospital 
              based on your specific needs and preferences.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Get Hospital Recommendations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hospitals;
