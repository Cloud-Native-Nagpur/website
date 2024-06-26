import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className='navBg z-10 shadow-sm fixed w-full flex justify-around md:justify-evenly rounded-b-xl py-2 md:py-4 items-center'>
        <div>
          <img src="/assets/navLogo.svg"
            className='w-36 md:w-40'
            alt="Logo"
            loading="lazy" />
        </div>
        <div>
          <ul className='text-white font-semibold hidden md:flex justify-center items-center gap-12 text-base'>
            <li><Link to="/" className='navLink'>Home</Link></li>
            <li><Link to="/about" className='navLink'>About Us</Link></li>
            <li><Link to="/roadmaps" className='navLink'>Roadmaps</Link></li>
            <li><Link to="/blogs" className='navLink'>Blogs</Link></li>
            <li><Link to="/events" className='navLink'>Events</Link></li>
            <li><Link to="/team" className='navLink'>Team</Link></li>
            <li><Link to="/faqs" className='navLink'>FAQs</Link></li>
          </ul>
        </div>
        <div className='md:ml-0 ml-6'>
          <span className='border-btn pt-0.5 md:pt-1 pb-1.5 px-0.5 rounded-3xl'>
            <button className='text-white py-1 text-xs md:text-sm rounded-3xl btn-bg font-semibold px-4 md:px-5'>Join Us</button>
          </span>
        </div>
        <button onClick={() => setToggle(!toggle)} className='md:hidden mr-2 text-white flex'>
          {toggle ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      <div className={`md:hidden ${toggle ? "flex" : "hidden"}`}>
        <ul className='text-white font-semibold fixed z-10 mt-12 pb-4 pt-6 flex flex-col w-full navBg rounded-b-xl text-left px-6 items-start gap-4 text-base'>
          <li><Link to="/" className='navLink'>Home</Link></li>
          <li><Link to="/about" className='navLink'>About Us</Link></li>
          <li><Link to="/roadmaps" className='navLink'>Roadmaps</Link></li>
          <li><Link to="/blogs" className='navLink'>Blogs</Link></li>
          <li><Link to="/events" className='navLink'>Events</Link></li>
          <li><Link to="/team" className='navLink'>Team</Link></li>
          <li><Link to="/faqs" className='navLink'>FAQs</Link></li>
        </ul>
      </div>
    </>
  );
};
