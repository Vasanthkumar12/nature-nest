import React from 'react'
import { NavLink } from 'react-router-dom'
import { CircleUserRound, ShoppingCart } from 'lucide-react';
// import logo  from '../../public/assets/natural-nest.png'

export const NavBar = () => {
  return (
    <div className="bg-lime-200 h-20 p-3 pl-5 pr-5 text-lime-600 font-sans text-2xl flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div>
        <h1 className="text-lime-600 font-cursive font-bold text-3xl ml-50">Natural Nest</h1>
        <div className="w-30 h-1 bg-lime-600 ml-5 mt-2 ml-55"></div>
      </div>

      {/* Desktop and larger screens */}
      <div className="hidden md:flex space-x-19  font-bold text-3xl text-lime-600" >
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/register">
          Register
        </NavLink>
        <NavLink  to='/profile'>
            <CircleUserRound className="h-8 w-8 mt-2" />
        </NavLink>
        <NavLink  to='/profile'>
            <ShoppingCart className="h-8 w-8 mr-20 mt-2" />
        </NavLink>
      </div>

      {/* Mobile Menu Icon (Hamburger) */}
      <div className="md:hidden flex items-center">
        <button className="text-white text-3xl">☰</button>
      </div>
    </div>
  );
};
