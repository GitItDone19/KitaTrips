import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('book-now');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Journey Beyond Earth
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience the ultimate space adventure with KitaTrips. Your gateway to interplanetary travel.
        </p>
        <Button 
          onClick={scrollToBooking}
          size="lg"
          className="hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]"
        >
          Start Your Journey
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  );
};

export default Hero;