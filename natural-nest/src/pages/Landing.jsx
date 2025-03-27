import React from 'react';
import { NavBar } from '../components/NavBar';
import { Products } from '../components/Products';

export const Landing = () => {
  return (
    <>
      <NavBar />
      
      <div className="min-h-100 bg-[url('/assets/bg.jpg')] bg-center bg-cover bg-no-repeat opacity-90 flex flex-col justify-center items-center px-4 text-center shadow-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[2px_2px_0px_black] font-sans ">
          A Warm Welcome to
          <span className="bg-gradient-to-r from-[#ff00fa] to-[#00ffff] bg-clip-text text-transparent pl-3">
            Natural Nest
          </span>
        </h1>
      </div>

      <Products />
    </>
  );
};
