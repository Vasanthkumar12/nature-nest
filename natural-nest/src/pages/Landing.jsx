import React from 'react';
import { NavBar } from '../components/NavBar';
import { Products } from '../components/products/Products';

export const Landing = () => {
  return (
    <>
      <NavBar />
      <div className='bg-lime-600 pt-5 text-center'>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[2px_2px_0px_black] font-sans ">
          A Warm Welcome to
          <span className="pl-3 text-green-400">
            Natural Nest
          </span>
        </h1>
      </div>
      
      <div className='bg-lime-600 p-10'>
        <div className=" min-h-100 bg-[url('/assets/bg.jpg')] bg-center bg-cover bg-no-repeat opacity-90 flex flex-col justify-center items-center px-4 text-center shadow-xl">
        </div>
      </div>

      <Products />
    </>
  );
};
