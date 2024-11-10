import React from 'react';
import { Link } from 'react-router-dom';

import Things2do from '../Assets/things2do_logo.svg';



const Navbar = () => {
  const scrollToAboutUs = () => {
    const element = document.getElementById("AboutUs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToDiscover = () => {
    const element = document.getElementById("Discover");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='flex justify-between items-center h-12 px-4 bg-blue1 w-full'>
      <div className='left-nav flex items-center'>
        <img src={Things2do} alt="logo" className='hidden sm:flex md:flex w-8 h-8' />
        <span className='lg:text-xl ml-4 text-base font-bold'>Things2do</span>
      </div>
      <div className='right-nav flex items-center pr-2'>
        <ul className='justify-right flex space-x-2 '>
          
        <button onClick={scrollToAboutUs} className='hidden px-3 lg:w-fit lg:h-8 sm: bg-white rounded-md sm:flex md:flex justify-center items-center'><li className='text-base cursor-pointer'>About Us</li></button>
        <button onClick={scrollToDiscover} className='hidden sm:flex px-3 lg:w-fit lg:h-8 bg-white rounded-md md:flex justify-center items-center'><li className='text-base cursor-pointer'>Discover</li></button>
        <Link to={'login'} className='justify-right sm:justify-center px-3 lg:w-fit lg:h-8 bg-white rounded-md flex md:justify-center items-center'><li className='text-base cursor-pointer'>Login/SignUp</li></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar