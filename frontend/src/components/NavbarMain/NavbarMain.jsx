import React from "react";
import { NavLink } from "react-router-dom";
import { User } from 'lucide-react';

import Things2do from '../Assets/things2do_logo.svg';


const NavbarMain = () => {
  return (
    <>
    <nav className="flex justify-between items-center h-12 px-4 bg-blue1">
      <div className="left-nav flex items-center">
        <img src={Things2do} alt="logo" className="w-8 h-8" />
        <div className="ml-4 text-xl font-bold">Things2do</div>
      </div>
      <div className="middle-nav flex items-center justify-between mr-16">
        <ul className="flex space-x-6">
          <li className="w-16 h-8 text-sm flex items-center justify-center cursor-pointer hover:bg-grey1 rounded-xl hover:text-white1">
            Discover
          </li>
          <li className="w-16 h-8 text-sm flex items-center justify-center cursor-pointer hover:bg-grey1 rounded-xl hover:text-white1">
            Trip
          </li>
          <li className="w-16 h-8 text-sm flex items-center justify-center cursor-pointer hover:bg-grey1 rounded-xl hover:text-white1">
            Review
          </li>
          <li className="w-16 h-8 text-sm flex items-center justify-center cursor-pointer hover:bg-grey1 rounded-xl hover:text-white1">
            More
          </li>
        </ul>
      </div>
      <div className="right-nav flex items-center pr-10 cursor-pointer group relative">
        <img
          src={User}
          alt=""
          className="w-10 h-10 rounded-full bg-red-400"
        />
        <div className="absolute top-0 right-0 pt-14 font-medium text-xs text-black z-400 hidden group-hover:block">
          <NavLink>
            <p className="bg-blue1 px-2 py-1 cursor-pointer hover:text-white  hover:bg-grey1">My profile</p>
          </NavLink>

          <hr />
          <NavLink to='/'>
            <p className="bg-blue1 px-2 py-1 cursor-pointer hover:text-white  hover:bg-grey1">Logout</p>
          </NavLink>
        </div>
      </div>
    </nav>
    <hr className="bg-grey1"/>
    </>
  );
};

export default NavbarMain;
