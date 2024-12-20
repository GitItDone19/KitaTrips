import React from 'react';
import { Rocket, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Pioneer in Space Tourism',
    description: 'Leading the way in commercial space travel since 1970, with an impeccable safety record.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Expert Crew',
    description: 'Our experienced astronauts and space professionals ensure a safe and memorable journey.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Safety First',
    description: 'Using cutting-edge technology and rigorous safety protocols for all our space missions.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          About KitaTrips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/50 to-black/50 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;