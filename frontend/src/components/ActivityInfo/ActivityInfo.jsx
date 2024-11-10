import React, { useEffect, useState } from "react";
import { fetchEventByName } from "../../api";
import { useLocation } from 'react-router-dom';
 
const ActivityInfo = () => {
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
    <div className='h-72 w-1/4 my-10 mx-10 bg-white rounded-xl'>
        <h1 className='pt-10 mx-10 font-semibold text-lg'>Details</h1>
        <hr />
        <div className="flex flex-col">
          <br />
          <div className="flex justify-left mx-5 font-medium">{eventDetails.name}</div>
          
          <div className="flex justify-start mt-1 mx-5"><span className="font-medium">Description:</span>{eventDetails.description}</div>
          
          <div className="flex justify-startmt-2 mx-5"><span className="font-medium">Tentative Cost:</span>{eventDetails.tentativeCost}</div>
          
          <div className="flex justify-start mt-2 mx-5"><span className="font-medium">Timings:</span>{eventDetails.openTime}-{eventDetails.closeTime}</div>

        </div>
    </div>
  )
}

export default ActivityInfo