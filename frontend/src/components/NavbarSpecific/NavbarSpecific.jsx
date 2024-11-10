import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Things2do from "../Assets/things2do_logo.svg";

const NavbarSpecific = () => {
  const [placeholder, setPlaceholder] = useState(
    "places to go,things to do..."
  );
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/searchresult/${searchTerm}`); // Navigate to search result with the search term
      setSearchTerm(""); // Clear the search input after submission
    }
  };
  const category_data = [
    {
      CategoryId: 1,
      CategoryName: "Outdoor Adventure",
      
    },
    {
      CategoryId: 5,
      CategoryName: "Sports",
      
    },
    {
      CategoryId: 6,
      CategoryName: "Dining",
      
    },
    {
      CategoryId: 8,
      CategoryName: "Nightlife",
      
    },
    {
      CategoryId: 9,
      CategoryName: "Cultural Experience",
      
    },
    {
      CategoryId: 12,
      CategoryName: "Entertainment",
      
    },
    {
      CategoryId: 4,
      CategoryName: "Fitness",
      
    },
    {
      CategoryId: 3,
      CategoryName: "Extreme Sports",
    },
    {
      CategoryId: 2,
      CategoryName: "Water Activities",
      
    },
    {
      CategoryId: 7,
      CategoryName: "Food & Drink",
      
    },
    {
      CategoryId: 10,
      CategoryName: "Learning",
    },
    {
      CategoryId: 11,
      CategoryName: "Festivals & Events",
    },
  ];
  return (
    <nav className="flex flex-col justify-between items-center h-28 px-4 bg-blue1">
      <div className="row-1 flex justify-between items-center w-full h-2/3">
        <div className="left-nav flex items-center">
          <NavLink to="/home"><img src={Things2do} alt="logo" className="w-8 h-8" /></NavLink>
          <div className="ml-4 text-xl font-bold">Things2do</div>
        </div>
        <div className=" middle-nav-Search-bar flex w-1/3 h-2/3 rounded-3xl bg-white shadow-2xl placeholder-slate-400 items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className="mx-5 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            className=" w-4/5 h-full mx-3 outline-none text-sm"
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="flex justify-center items-center bg-blue1 rounded-3xl w-24 ml-5 mr-3" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="right-nav flex items-center justify-between mr-16">
          <ul className="flex space-x-6">
            <li className="w-16 h-8 text-sm flex items-center justify-center cursor-pointer hover:bg-grey1 hover: text-white1 rounded-xl">
              Discover
            </li>
            <li className="w-16 h-8 text-sm flex items-center justify-center cursor-pointer hover:bg-grey1 hover: text-white1 rounded-xl">
              Trip
            </li>
            <li className="w-16 h-8 text-sm flex items-center justify-center cursor-pointer hover:bg-grey1 hover: text-white1 rounded-xl">
              Review
            </li>
            <li className="w-16 h-8 text-sm flex items-center justify-center cursor-pointer hover:bg-grey1 hover: text-white1 rounded-xl">
              More
            </li>
          </ul>
        </div>
        <div className="right-most-nav flex items-center pr-10 group relative">
          <img src="" alt="" className="w-10 h-10 rounded-full bg-red-400" />
          <div className="absolute top-0 right-0 pt-14 font-medium text-xs text-black z-400 hidden group-hover:block">
            <NavLink>
              <p className="bg-white px-2 py-1 hover:text-blue1 cursor-pointer">
                My profile
              </p>
            </NavLink>

            <hr />
            <NavLink to="/">
              <p className="bg-white px-2 py-1 hover:text-blue1 cursor-pointer">
                Logout
              </p>
            </NavLink>
          </div>
        </div>
      </div>

      
      <div className=" row-2 flex items-center justify-start options-div w-full h-1/3 space-x-5 font-black bg-transparent list-none ">
      {category_data.map((d) => (
        <button className="flex flex-row">
          <li
            className="text-xs font-semibold space-x-1 py-2  hover:underline flex items-center text-white "
            onClick={() => {
              setPlaceholder("Explore hiking trails, parks, and adventures...");
              navigate(`/activities/${d.CategoryName.toLowerCase()}`, { state: { category: d.CategoryName } })
            }}
          >
            {d.CategoryName}
          </li>
        </button>
      
    ))}
      </div>
    
    </nav>
  );
};

export default NavbarSpecific;
