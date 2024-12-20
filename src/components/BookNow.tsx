import React from 'react';
import Button from './ui/Button';

const BookNow = () => {
  return (
    <section id="book-now" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-b from-purple-900/50 to-black/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Book Your Space Adventure
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="trip" className="block text-sm font-medium text-gray-300 mb-2">
                Select Trip
              </label>
              <select
                id="trip"
                className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="">Choose your destination</option>
                <option value="lunar">Lunar Gateway</option>
                <option value="mars">Mars Colony</option>
                <option value="europa">Europa Station</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Special Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Any special requirements or questions?"
              ></textarea>
            </div>

            <Button className="w-full">
              Submit Booking Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookNow;