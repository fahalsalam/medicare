import React from 'react';
import { ArrowRight, Shield, Award, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Mavenhawk
                <span className="block text-blue-600">Where Healthcare Meets Hospitality</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class medical treatments combined with exceptional hospitality. 
                Trusted hospitals, expert doctors, and comprehensive care packages at affordable prices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 transform hover:scale-105">
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
                Talk to Our Experts
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Accredited Hospitals</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-blue-700" />
                </div>
                <p className="text-sm font-medium text-gray-700">Expert Specialists</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Global Network</p>
              </div>
            </div>
          </div>

          <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Medical tourism consultation"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  />
                </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-orange-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;