"use client"
import React, { useState } from 'react';
import Link from 'next/link'
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <button
          type="button"
          onClick={toggleMenu}
        //   className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          
        >
          Products
          
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
         
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          <div className="py-1" role="none">
            {/* Dropdown options go here */}
          <Link href='/skincare'>
          
          <p
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Skincare
            </p>
          </Link>
          <Link href='/haircare'>
            <p
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Haircare
            </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
