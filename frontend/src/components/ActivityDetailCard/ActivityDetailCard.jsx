//ActivityDetailCard.jsx
import React from "react"; 
// import { useState, useEffect } from "react";
// import { fetchEventByName } from "../../api"; // Make sure to import the function you created for fetching events
import { useNavigate } from "react-router-dom";
import Rating from "../Rating/Rating"; 

const ActivityDetailCard = ({ eventName, eventDescription, completeAddress, rating, tentativeCost,category,openTime,closeTime,backgroundImageLink }) => { // Accept eventName as a prop
  // const [rating, setRating] = useState(0);
  // const [eventData, setEventData] = useState(null); // State to hold the event data
  // const [error, setError] = useState(null); // State to handle errors

  // useEffect(() => {
  //   const fetchRating = async () => {
  //     try {
  //       const fetchedEvent = await fetchEventByName(eventName); // Fetch event data by name
  //       if (fetchedEvent) {
  //         setRating(Math.round(fetchedEvent.rating)); // Set the rating from fetched data
  //         setEventData(fetchedEvent); // Save the event data to state
  //       } else {
  //         setError("Event not found"); // Handle case where event is not found
  //       }
  //     } catch (err) {
  //       setError(err.message); // Set error message if the API call fails
  //     }
  //   };

  //   fetchRating();
  // }, [eventName]); // Trigger effect when eventName changes

  // if (error) return <div>Error: {error}</div>; // Show error message if there's an error
  const navigate=useNavigate();
  return (
    <div className="main-div flex justify-center w-full h-full my-10 bg-grey2" >
      <div reloadDocument={true} className="activity-card flex bg-white w-3/4 h-64 rounded-md" onClick={() => navigate(`/activities/${category}/${eventName}`,{ state: { name: eventName } })} >
        <div className="left-section w-1/3 h-full">
          <img src={backgroundImageLink} alt="" className="w-full h-full rounded-s-md" />
        </div>
        <div className="right-section">
          <div className="category w-fit h-6 px-2 mt-5 mb-2 mx-5 flex justify-center items-center rounded-sm bg-white font-semibold text-xs outline outline-1 outline-black">{category}</div>
          <h3 className="detail-name mx-5 my-2 font-semibold text-xl">{eventName}</h3>
          <div className="flex items-center rating-comment_number">
            <Rating rating={rating} />
            <div className="description mx-2 text-slate-400 text-xs font-semibold">0</div>
          </div>
          <div className="address mx-5 mt-2 mb-10 font-normal text-sm text-slate-700">{completeAddress}</div>
          <div className="open-close mx-5 font-semibold">"{openTime}"-"{closeTime}"</div>
          <div className="most-liked-review mx-5 mb-10">"{eventDescription}"</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailCard;
