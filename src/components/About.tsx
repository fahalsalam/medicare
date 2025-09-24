import { Award, Shield, Users, Globe, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const certifications = [
    { name: 'JCI Accredited', description: 'Joint Commission International' },
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'NABH Certified', description: 'National Accreditation Board' },
    { name: 'WHO Listed', description: 'World Health Organization' }
  ];

  const stats = [
    { number: '15,000+', label: 'Successful Procedures' },
    { number: '50+', label: 'Partner Hospitals' },
    { number: '25+', label: 'Countries Served' },
    { number: '98%', label: 'Patient Satisfaction' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric Care',
      description: 'Every decision we make is guided by what\'s best for our patients\' health and well-being.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Rigorous safety protocols and internationally accredited facilities ensure your peace of mind.'
    },
    {
      icon: Globe,
      title: 'Global Excellence',
      description: 'Access to world-class medical facilities and renowned specialists across multiple countries.'
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Dedicated care coordinators who understand your unique needs and cultural preferences.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Mavenhawk
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mavenhawk is where healthcare meets hospitality. We bridge the gap between 
            world-class medical treatment and exceptional travel experiences, making 
            quality healthcare accessible and affordable for everyone.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to world-class healthcare by connecting patients with 
              internationally accredited medical facilities, ensuring quality treatment 
              at affordable prices while providing comprehensive travel and accommodation support.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the global leader in medical tourism, transforming healthcare 
              accessibility worldwide and creating a seamless bridge between patients 
              and premium medical care across borders.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Accreditations & Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Mavenhawk?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Internationally Accredited Facilities</h4>
                  <p className="text-gray-600">All our partner hospitals meet JCI, NABH, and WHO standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock assistance from our dedicated care coordinators.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Transparent Pricing</h4>
                  <p className="text-gray-600">No hidden costs. All-inclusive packages with clear pricing.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Multilingual Support</h4>
                  <p className="text-gray-600">Communication in your preferred language throughout your journey.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comprehensive Care</h4>
                  <p className="text-gray-600">From pre-treatment consultation to post-treatment follow-up.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Sensitivity</h4>
                  <p className="text-gray-600">Understanding and respecting your cultural and religious needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
