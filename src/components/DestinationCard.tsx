import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  image: string;
  description: string;
  price: string;
  duration: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  image,
  description,
  price,
  duration,
}) => {
  return (
    <div className="group relative bg-gradient-to-b from-purple-900/50 to-black/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-purple-400 font-semibold">{price}</p>
            <p className="text-gray-400 text-sm">{duration}</p>
          </div>
          <button className="p-2 rounded-full bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;