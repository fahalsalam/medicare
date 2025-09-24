import { Heart, Eye, Bone, Baby, Zap, Smile, Brain, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced heart procedures including bypass, valve replacement, and minimally invasive cardiac treatments.',
      price: 'From $15,000',
      savings: 'Save up to 70%',
      color: 'bg-red-100 text-red-600',
      imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Joint replacements, sports medicine, spine surgery with cutting-edge technology.',
      price: 'From $8,000',
      savings: 'Save up to 80%',
      color: 'bg-blue-100 text-blue-600',
      imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Baby,
      title: 'Fertility',
      description: 'IVF, reproductive medicine, fertility preservation with highest success rates.',
      price: 'From $5,000',
      savings: 'Save up to 65%',
      color: 'bg-pink-100 text-pink-600',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Smile,
      title: 'Cosmetic Surgery',
      description: 'Aesthetic procedures, reconstructive surgery by board-certified surgeons.',
      price: 'From $3,000',
      savings: 'Save up to 75%',
      color: 'bg-purple-100 text-purple-600',
      imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Oncology',
      description: 'Cancer treatment, radiation therapy, immunotherapy with latest protocols.',
      price: 'From $12,000',
      savings: 'Save up to 60%',
      color: 'bg-orange-100 text-orange-600',
      imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological treatments, brain surgery, and neurological rehabilitation.',
      price: 'From $18,000',
      savings: 'Save up to 65%',
      color: 'bg-indigo-100 text-indigo-600',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Activity,
      title: 'General Surgery',
      description: 'Comprehensive surgical procedures including minimally invasive and robotic surgery.',
      price: 'From $6,000',
      savings: 'Save up to 70%',
      color: 'bg-green-100 text-green-600',
      imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'LASIK, cataract surgery, retinal treatments with world-renowned specialists.',
      price: 'From $2,500',
      savings: 'Save up to 60%',
      color: 'bg-cyan-100 text-cyan-600',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            World-Class Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access premium healthcare treatments at leading international hospitals 
            with significant cost savings and exceptional care quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform"
              />
              <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  {service.price}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {service.savings}
                </span>
              </div>
              
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;