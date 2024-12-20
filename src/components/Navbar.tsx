import React from 'react';
import { RocketIcon, Menu } from 'lucide-react';
import Button from './ui/Button';
import NavLink from './ui/NavLink';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <RocketIcon className="w-8 h-8 text-purple-400 animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              KitaTrips
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#destinations">Destinations</NavLink>
            <NavLink href="#trips">Trips</NavLink>
            <NavLink href="#about">About</NavLink>
            <Button size="sm">Book Now</Button>
          </div>

          <button 
            className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;