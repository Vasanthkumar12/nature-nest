import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CircleUserRound, ShoppingCart } from 'lucide-react';
// import logo  from '../../public/assets/natural-nest.png'

export const NavBar = () => {
  return (
    <div className="bg-lime-600 h-20 p-3 pl-5 pr-5 text-white font-sans text-2xl flex justify-between items-center">
      <div>
        <h1 className="text-white font-cursive">Natural Nest</h1>
        <div className="w-30 h-0.5 bg-white ml-2 mt-2"></div>
      </div>

      {/* Desktop and larger screens */}
      <div className="hidden md:flex space-x-6 text-white">
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
            <CircleUserRound className="h-8 w-8" />
        </NavLink>
        <NavLink  to='/profile'>
            <ShoppingCart className="h-8 w-8" />
        </NavLink>
      </div>

      {/* Mobile Menu Icon (Hamburger) */}
      <div className="md:hidden flex items-center">
        <button className="text-white text-3xl">☰</button>
      </div>
    </div>
  );
};
