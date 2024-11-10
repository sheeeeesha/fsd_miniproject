import React, { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import { fetchEventByName } from "../../api";
import { useLocation } from 'react-router-dom';
 
const ActivityOverview = () => {
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

  // Display a loading state while fetching data
  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  // Display the fetched event details
  if (!eventDetails) {
    return <div>No event found.</div>; // Handle case when no event is found
  }

  return (
    <div className="flex flex-col h-fit w-full px-20 py-5 bg-white">
      <div className="loc-navigation text-xs">
        Asia / India / Maharashtra / Pune / {eventDetails.category} /
      </div>
      <div className="">
        <div className="flex items-center place-name mt-10 mb-4 text-3xl font-extrabold">
          {eventDetails.name} {/* Use the fetched event name */}
          <Rating rating={eventDetails.rating} /> {/* Assuming this component uses the event's rating */}
        </div>
      </div>

      <div>
        <div className="flex">
          <div className="description">{eventDetails.description}</div>
          <br /><br />
        </div>

        <div className="section-2 flex space-x-2 ">
          <div className="contact">{eventDetails.contactNumber}</div>
          <span className="font-thin h-3/4">|</span>
          <div className="timings">{eventDetails.openTime}-{eventDetails.closeTime}</div>
          <span className="font-thin h-3/4">|</span>
          <div className="address">{eventDetails.completeAddress}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;



