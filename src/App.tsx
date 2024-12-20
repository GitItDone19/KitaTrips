import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Trips from './components/Trips';
import About from './components/About';
import BookNow from './components/BookNow';

function App() {
  return (
    <div className="min-h-screen bg-[#0d051e] text-white">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Trips />
        <About />
        <BookNow />
      </main>
    </div>
  );
}

export default App;