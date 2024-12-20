import React from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
  {
    title: 'Lunar Gateway',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
    description: "Experience Earth's closest neighbor with stunning views of our home planet.",
    price: 'From $250,000',
    duration: '5 Days',
  },
  {
    title: 'Mars Colony',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&q=80&w=1200',
    description: 'Visit the first human settlement on the Red Planet.',
    price: 'From $850,000',
    duration: '180 Days',
  },
  {
    title: 'Europa Station',
    image: 'https://images.unsplash.com/photo-1614724723656-457e78e0b50b?auto=format&fit=crop&q=80&w=1200',
    description: "Explore the mysteries beneath the icy surface of Jupiter's moon.",
    price: 'From $1,500,000',
    duration: '400 Days',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.title} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;