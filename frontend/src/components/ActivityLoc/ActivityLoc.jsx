import React, { useEffect, useState } from "react";
import { fetchEventByName } from "../../api";
import { useLocation } from "react-router-dom";

const ActivityLoc = () => {
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
    <div className="h-72 pb-10 w-1/4 my-10 mx-10 bg-white rounded-xl">
      <h1 className="pt-10 mx-10 font-bold text-lg">Location and Contact</h1>
      <hr />
      <div className="px-5 py-10">
        <ul className="space-y-10">
          <li className="address ">{eventDetails.completeAddress}</li>
          <li className="contact ">{eventDetails.contactNumber}</li>
        </ul>
      </div>
    </div>
  );
};

export default ActivityLoc;
