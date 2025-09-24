import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      {/* Top bar */}
      <div className="hidden md:block bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@medtourism.com</span>
            </div>
          </div>
          <div>
            <span>Available 24/7 for consultations</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4" aria-label="Primary">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Mavenhawk</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#about" className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">About</a>
            <a href="#services" className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Treatments</a>
            <a href="#destinations" className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Destinations</a>
            <a href="#packages" className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Packages</a>
            <a href="#blog" className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Resources</a>
            <a href="#contact" className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors font-medium">
              Free Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)} />
            <div id="mobile-menu" className="lg:hidden mt-4 pb-6 border-t border-gray-200 relative z-50">
              <div className="flex flex-col space-y-4 pt-4 bg-white rounded-xl shadow-lg p-4">
                <a href="#about" className="text-gray-800 hover:text-blue-700 font-medium">About</a>
                <a href="#services" className="text-gray-800 hover:text-blue-700 font-medium">Treatments</a>
                <a href="#destinations" className="text-gray-800 hover:text-blue-700 font-medium">Destinations</a>
                <a href="#packages" className="text-gray-800 hover:text-blue-700 font-medium">Packages</a>
                <a href="#blog" className="text-gray-800 hover:text-blue-700 font-medium">Resources</a>
                <a href="#contact" className="text-gray-800 hover:text-blue-700 font-medium">Contact</a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium w-fit">
                  Free Consultation
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;