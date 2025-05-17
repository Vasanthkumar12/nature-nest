import React from 'react';
import { NavBar } from '../components/NavBar';

export const Home = () => {
  return (
    <div>
      <NavBar />

      {/* Fullscreen Hero Section */}
      <div className="bg-lime-200 min-h-screen flex flex-col justify-center px-4 sm:px-8 pt-10">
        
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-lime-500 drop-shadow-[1px_1px_0px_black] font-sans">
            Welcome to
            <span className="pl-3 text-lime-600">Natural Nest</span>
          </h1>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Left Text */}
          <div className="text-lime-700 text-lg sm:text-xl md:text-2xl leading-relaxed px-2 sm:px-4">
            <p>
              Welcome to <strong>Natural Nest</strong> – Your Trusted Source for Fresh & Healthy Living! At Natural Nest, we believe that good health starts with natural choices. That’s why we bring you a handpicked selection of fresh vegetables, juicy fruits, and other wholesome items – all sourced with care and delivered with love. Whether you're looking to eat clean, live better, or simply enjoy the taste of nature, Natural Nest is your go-to destination for nutritious, farm-fresh goodness.
              <br /><br />
              Experience the freshness. Embrace the health. Start your journey with Natural Nest today!
            </p>
          </div>

          {/* Right Image Section */}
          <div className="h-64 sm:h-80 md:h-[400px] w-full rounded-lg shadow-xl bg-[url('/assets/bg.jpg')] bg-center bg-cover bg-no-repeat opacity-90"></div>
        </div>
      </div>
    </div>
  );
};
