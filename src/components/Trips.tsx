import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import Button from './ui/Button';

const trips = [
  {
    title: 'Lunar Weekend',
    description: 'A quick trip to the Moon and back. Perfect for first-time space travelers.',
    duration: '3 days',
    nextDeparture: '2024-04-15',
    capacity: '6 travelers',
    price: '$180,000',
  },
  {
    title: 'Mars Adventure',
    description: 'Experience the Red Planet with our comprehensive Mars exploration package.',
    duration: '180 days',
    nextDeparture: '2024-07-01',
    capacity: '8 travelers',
    price: '$850,000',
  },
  {
    title: 'Space Station Stay',
    description: 'Live aboard our luxury space station with Earth views and zero-gravity activities.',
    duration: '7 days',
    nextDeparture: '2024-05-20',
    capacity: '12 travelers',
    price: '$350,000',
  },
];

const Trips = () => {
  return (
    <section id="trips" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Available Trips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div
              key={trip.title}
              className="bg-gradient-to-b from-purple-900/50 to-black/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{trip.title}</h3>
                <p className="text-gray-300 mb-6">{trip.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-purple-400" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                    <span>{trip.nextDeparture}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2 text-purple-400" />
                    <span>{trip.capacity}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-400">{trip.price}</span>
                  <Button variant="secondary" size="sm">Book Trip</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trips;