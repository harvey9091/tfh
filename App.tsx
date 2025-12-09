import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SquadSection from './components/SquadSection';
import LatestVideos from './components/LatestVideos';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-200 overflow-x-hidden selection:bg-red-900 selection:text-white">
      <NavBar />
      <main>
        <Hero />
        <SquadSection />
        <LatestVideos />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default App;