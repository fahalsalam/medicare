import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold">Mavenhawk</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in global healthcare. We connect patients with 
              world-class medical treatments at affordable prices worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Medical Services</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#doctors" className="text-gray-300 hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Patient Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Guide</a></li>
            </ul>
          </div>

          {/* Medical Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Popular Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cardiac Surgery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Orthopedic Surgery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cosmetic Surgery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fertility Treatment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Eye Surgery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cancer Treatment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-300">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium">info@mediglobal.com</p>
                  <p className="text-sm text-gray-300">Email Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">123 Healthcare Plaza</p>
                  <p className="text-sm text-gray-300">Miami, FL 33101, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Mavenhawk. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;