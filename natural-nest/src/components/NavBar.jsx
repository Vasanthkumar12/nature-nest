import React from 'react';
import { NavLink } from 'react-router-dom';
import { CircleUserRound, ShoppingCart } from 'lucide-react';

export const NavBar = () => {
  return (
    <div className="bg-lime-200 h-20 px-5 text-lime-600 font-sans text-2xl flex justify-between items-center sticky top-0 z-50 shadow-md">
      
      {/* Logo Section */}
      <div>
        <h1 className="text-lime-600 font-cursive font-bold text-3xl">Natural Nest</h1>
        <div className="w-24 h-1 bg-lime-600 mt-2"></div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 font-bold text-lg text-lime-600">
        <NavLink to="/" className="hover:text-lime-800 transition">Home</NavLink>
        <NavLink to="/about" className="hover:text-lime-800 transition">About</NavLink>
        <NavLink to="/contact" className="hover:text-lime-800 transition">Contact</NavLink>
        <NavLink to="/register" className="hover:text-lime-800 transition">Register</NavLink>
        <NavLink to="/profile" className="hover:text-lime-800 transition">
          <CircleUserRound className="h-7 w-7" />
        </NavLink>
        <NavLink to="/cart" className="hover:text-lime-800 transition">
          <ShoppingCart className="h-7 w-7" />
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button className="text-lime-700 text-3xl font-bold focus:outline-none">
          ☰
        </button>
      </div>
    </div>
  );
};
