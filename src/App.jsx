import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedArticles from './components/FeaturedArticles';
import CategoriesSection from './components/CategoriesSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedArticles />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
