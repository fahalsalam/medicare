import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import TravelPlan from './components/TravelPlan';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <TravelPlan />
      <Packages />
      <HowItWorks />
      <Doctors />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;