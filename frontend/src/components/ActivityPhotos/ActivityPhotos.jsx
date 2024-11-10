import React, { useEffect, useState } from "react";
import { fetchEventByName } from "../../api";
import { useLocation } from "react-router-dom";

const ActivityPhotos = () => {
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
    <div className="flex h-96 w-5/6 my-10 mx-10 bg-white rounded-xl">
      <img
        src={eventDetails.backgroundImageLink}
        alt="Event Background"
        className="w-full h-full rounded-s-md"
      />
    </div>
  );
};

export default ActivityPhotos;

