import React from 'react';
import { Award, GraduationCap, Users, Star } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiac Surgeon',
      location: 'Bangkok, Thailand',
      experience: '15+ Years Experience',
      patients: '2,000+ Successful Surgeries',
      education: 'Harvard Medical School',
      rating: '4.9',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Best Cardiac Surgeon Award 2023', 'International Fellowship']
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Orthopedic Surgeon',
      location: 'New Delhi, India',
      experience: '20+ Years Experience',
      patients: '5,000+ Joint Replacements',
      education: 'AIIMS New Delhi',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Minimally Invasive Surgery Pioneer', 'Research Publications: 50+']
    },
    {
      name: 'Dr. Maria Santos',
      specialty: 'Fertility Specialist',
      location: 'Mexico City, Mexico',
      experience: '12+ Years Experience',
      patients: '85% Success Rate',
      education: 'Universidad Nacional Autónoma',
      rating: '4.9',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['IVF Excellence Award', 'Reproductive Medicine Expert']
    },
    {
      name: 'Dr. Mehmet Özkan',
      specialty: 'Cosmetic Surgeon',
      location: 'Istanbul, Turkey',
      experience: '18+ Years Experience',
      patients: '3,500+ Procedures',
      education: 'Istanbul University',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Aesthetic Surgery Master', 'International Board Certified']
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            World-Renowned Medical Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our network includes internationally trained specialists with proven track records 
            and thousands of successful procedures across various medical fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-green-500 font-semibold mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {doctor.location}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{doctor.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{doctor.patients}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <GraduationCap className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">{doctor.education}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <div className="space-y-1">
                    {doctor.achievements.map((achievement, idx) => (
                      <p key={idx} className="text-xs text-gray-600 leading-relaxed">
                        • {achievement}
                      </p>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full hover:bg-green-500 hover:text-white transition-colors font-semibold">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;