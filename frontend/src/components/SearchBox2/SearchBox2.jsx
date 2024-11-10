import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSearchTerm } from "../../api";


const SearchBox2 = ({ current, setCurrent, setCategory }) => {
  const [placeholder, setPlaceholder] = useState(
    "places to go,things to do..."
  ); 
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = async () => {
    if (searchTerm) {
      // Save the search term to the database
      try {
        await saveSearchTerm(searchTerm);  // Call to save search term in MongoDB
        console.log("Search term saved:", searchTerm);
      } catch (error) {
        console.error("Error saving search term:", error);
      }

      // Navigate to search result page with the search term
      navigate(`/searchresult/${searchTerm}`);
      setSearchTerm(""); // Clear the search input after submission
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center bg-blue1 w-full h-fit">
      <div className=" w-full h-full punchline text-5xl font-extrabold text-center mb-16 mt-12">
        {current}
      </div>
      <div className="flex items-center justify-between options-div w-4/5 h-10 bg-transparent list-none ">
        <button className="flex flex-col">
          <li
            className="text-sm font-semibold space-x-1  py-2 text-grey1 flex items-center "
            onClick={() => {
              setCurrent("Chase the Thrill");
              setPlaceholder("Explore hiking trails, parks, and adventures...");
              setCategory("Outdoor Adventure");
            }}
          >
            Outdoor Adventure
          </li>
          <div
            className={
              current === "Chase the Thrill"
                ? "line h-1 w-full bg-black my-1"
                : "line h-2 w-10 bg-black my-3 hidden"
            }
          ></div>
        </button>

        <button>
          <li
            className="text-sm font-semibold space-x-1 py-2 text-grey1 flex items-center"
            onClick={() => {
              setCurrent("Get Fit, Stay Active");
              setPlaceholder("Discover gyms, sports events, and more...");
              setCategory("Sports and Fitness");
            }}
          >
            Sports and Fitness
          </li>
          <div
            className={
              current === "Get Fit, Stay Active"
                ? "line h-1 w-full bg-black my-1"
                : "line h-2 w-10 bg-black my-3 hidden"
            }
          ></div>
        </button>
        <button>
          <li
            className="text-sm font-semibold space-x-1  text-grey1 py-2  flex items-center"
            onClick={() => {
              setCurrent("Savor Every Bite");
              setPlaceholder("Search for the best restaurants near you...");
              setCategory("Dining and Food");
            }}
          >
            Dining and Food
          </li>
          <div
            className={
              current === "Savor Every Bite"
                ? "line h-1 w-full bg-black my-1"
                : "line h-2 w-10 bg-black my-3 hidden"
            }
          ></div>
        </button>
        <button>
          <li
            className="text-sm font-semibold space-x-1 py-2  text-grey1  flex items-center"
            onClick={() => {
              setCurrent("Relax, Watch, and Escape");
              setPlaceholder("Find movies, stand-up shows, and concerts...");
              setCategory("Entertainment");
            }}
          >
            Entertainment
          </li>
          <div
            className={
              current === "Relax, Watch, and Escape"
                ? "line h-1 w-full bg-black my-1"
                : "line h-2 w-10 bg-black my-3 hidden"
            }
          ></div>
        </button>
        <button>
          <li
            className="text-sm font-semibold space-x-1 py-2  text-grey1  flex items-center"
            onClick={() => {
              setCurrent("Unwind, Dance, Repeat");
              setPlaceholder("Looking for clubs, bars, or events?");
              setCategory("Social and Nightlife");
            }}
          >
            Social and Nightlife
          </li>
          <div
            className={
              current === "Unwind, Dance, Repeat"
                ? "line h-1 w-full bg-black my-1"
                : "line h-2 w-10 bg-black my-3 hidden"
            }
          ></div>
        </button>
        <button>
          <li
            className="text-sm font-semibold space-x-1 py-2  text-grey1 flex items-center "
            onClick={() => {
              setCurrent("Explore, Learn, and Grow");
              setPlaceholder("Find museums, workshops, and more...");
              setCategory("Cultural and Educational");
            }}
          >
            Cultural and Educational
          </li>
          <div
            className={
              current === "Explore, Learn, and Grow"
                ? "line h-1 w-full bg-black my-1"
                : "line h-2 w-10 bg-black my-3 hidden"
            }
          ></div>
        </button>
      </div>
 
      <div className="Search-bar flex mb-10 mt-5 w-4/6 h-16 rounded-3xl bg-white shadow-2xl placeholder-slate-400 items-center justify-start">
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
          className=" w-4/5 h-full mx-3 outline-none "
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="bg-blue1 rounded-3xl w-24 h-12 ml-5 mr-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox2;
