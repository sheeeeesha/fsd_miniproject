//SearchResult.jsx
import React, { useState, useEffect } from "react"; 
import NavbarSpecific from "../../components/NavbarSpecific/NavbarSpecific";
import ActivityDetailCard from "../../components/ActivityDetailCard/ActivityDetailCard";
import { useParams } from "react-router-dom";
import { fetchSearchResults } from "../../api";

const SearchResult = () => {
  const { eventName } = useParams(); // Get the search term from the URL
  const [results, setResults] = useState([]); // To store search results
  const [loading, setLoading] = useState(true); // Loading state
  useEffect(() => {
    const fetchResults = async () => {
      try {
        console.log(`Fetching results for: ${eventName}`); // Debug log
        const data = await fetchSearchResults(eventName);
        console.log("Fetched results:", data); // Debug log
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [eventName]);

  return (
    <div className="bg-grey2">
      <NavbarSpecific />
      <div>
        <div className="flex w-full">
          <div className="w-1/6 h-full"></div>
          <div className="w-full h-full">
            <div className=" flex justify-center text-3xl font-bold py-10 ">
              <h1>All matches for "{eventName}"...</h1>
              <hr />
            </div>

            {loading ? (
              <div>Loading...</div> // Display loading indicator
            ) : results.length > 0 ? (
              results.map((event) => (
                <ActivityDetailCard
                  key={event._id} // Use a unique key for each event
                  eventName={event.name} // Pass event name
                  eventDescription={event.description} // Pass additional event details as needed
                  completeAddress={event.completeAddress} // Pass address
                  rating={event.rating} // Pass rating
                  tentativeCost={event.tentativeCost} // Pass cost
                  category={event.category}
                  openTime={event.openTime}
                  closeTime={event.closeTime}
                  backgroundImageLink={event.backgroundImageLink}
                  
                />
              ))
            ) : (
              <p>No results found for "{eventName}".</p> // Message for no results
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
