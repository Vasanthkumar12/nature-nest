import React from 'react'
import { NavBar } from '../components/NavBar';

export const Home = () => {
  return (
    <div className=''>
      <NavBar />
      <div className='bg-lime-200 pt-5 text-center'>
        <h1 className="text-3xl text-lime-500 sm:text-5xl md:text-6xl lg:text-5xl font-bold  drop-shadow-[1px_1px_0px_black] font-sans ">
          Welcome to
          <span className="pl-3 text-lime-600">
          Natural Nest
          </span>
        </h1>
      </div>
      
      <div className='bg-lime-200 p-10 grid grid-cols-2'>
        <div className='mt-10 mr-20'>
          <p className='text-2xl text-lime-700'>Welcome to Natural Nest – Your Trusted Source for Fresh & Healthy Living! At Natural Nest, we believe that good health starts with natural choices. That’s why we bring you a handpicked selection of fresh vegetables, juicy fruits, and other wholesome items – all sourced with care and delivered with love. Whether you're looking to eat clean, live better, or simply enjoy the taste of nature, Natural Nest is your go-to destination for nutritious, farm-fresh goodness.
          Experience the freshness. Embrace the health. Start your journey with Natural Nest today!</p>
        </div>
        <div className="mt-10 bg-[url('/src/assets/bg.jpg')] bg-center bg-cover bg-no-repeat opacity-90 flex flex-col justify-center items-center px-4 text-center shadow-xl">
        </div>
      </div>
    </div>
  )
}
