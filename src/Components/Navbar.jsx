// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Navbar() {
  const { logout, isAuthenticated, username } = useAuth();

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to='/'
                  className={({ isActive }) => `text-lg px-3 py-2 rounded-md font-medium ${isActive ? 'underline text-white' : 'hover:bg-blue-700 hover:text-white'}`}
                >
                  Home
                </NavLink>
                <NavLink
                  to='/about'
                  className={({ isActive }) => `text-lg px-3 py-2 rounded-md font-medium ${isActive ? 'underline text-white' : 'hover:bg-blue-700 hover:text-white'}`}
                >
                  About
                </NavLink>
                <NavLink
                  to='/addtocart'
                  className={({ isActive }) => `text-lg px-3 py-2 rounded-md font-medium ${isActive ? 'underline text-white' : 'hover:bg-blue-700 hover:text-white'}`}
                >
                  Add to Cart
                </NavLink>
              </div>
            </div>
          </div>
          {isAuthenticated && (
           <div className="flex items-center space-x-4">
           <div className="flex items-center bg-green-600 text-white px-3 py-2 rounded-lg shadow-md">
             <span className="text-sm font-medium">{username}</span>
             <span className="text-xs ml-1">Logged In</span>
             <div className="w-2 h-2 bg-red-500 rounded-full ml-2 animate-blink"></div>
           </div>
           <button
             onClick={logout}
             className="bg-red-600 text-white px-3 py-2 rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
           >
             Logout
           </button>
         </div>
         
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
