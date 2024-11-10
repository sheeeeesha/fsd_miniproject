import React, { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import { fetchEventByName } from "../../api";
import { useLocation } from 'react-router-dom';
 
const ActivityRatings = () => {
  const location = useLocation();
  const name = location.state?.name;
  const [eventDetails, setEventDetails] = useState(null); // State to hold event details
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchEvent = async () => {
      if (name) {
        try {
          const fetchedEvent = await fetchEventByName(name); // Fetch event details by name
          setEventDetails(fetchedEvent); // Set the fetched event details in state
        } catch (error) {
          console.error("Error fetching event:", error);
        } finally {
          setLoading(false); // Stop loading
        }
      }
    };

    fetchEvent();
  }, [name]); // Fetch when the name changes


  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  if (!eventDetails) {
    return <div>No event found.</div>; // Handle case when no event is found
  }




  return (
    <div className='h-72 w-1/4 my-10 mx-10 pb-10 bg-white rounded-xl'>
        <h1 className='pt-10 mx-10 font-semibold text-lg'>Ratings and Reviews</h1>
        <hr />
        <div>
        <div className="rating">
          <div className="stars flex justify-center my-5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(eventDetails.rating) ? 'filled' : ''}`}>
                &#9733;
              </span>
            ))}
          </div>
          <span className="review-count flex justify-center">{128} reviews</span>
        </div>
        <div className=" flex ranking justify-center">
          #{2} of 81 Restaurants in Monte Verde
        </div>
        
      </div>
    </div>
  )
}

export default ActivityRatings