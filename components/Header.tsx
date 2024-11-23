"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#DAC0A3] text-black p-5 flex justify-between items-center flex-wrap">
      <div className="flex items-center gap-3">
        <Image
          className="w-[40px] h-[40px] rounded-full object-cover"
          src="/logo-p.jpg"
          alt="Logo"
        />
        <h1 className="text-xl font-bold">Luxe by Tehse</h1>
      </div>
      <div
        className="sm:hidden text-xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } sm:flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full sm:w-auto mt-4 sm:mt-0`}
      >
        <Link href="/" className="text-black font-bold hover:underline">
          (Home)
        </Link>
        <Link href="/about" className="text-black font-bold hover:underline">
          (About)
        </Link>
        <Link href="/perfume" className="text-black font-bold hover:underline">
          (Perfumes)
        </Link>
        <Link href="/contact" className="text-black font-bold hover:underline">
          (Contact Us)
        </Link>
        <FaShoppingCart />
      </nav>
    </header>
  );
};

export default Header;
