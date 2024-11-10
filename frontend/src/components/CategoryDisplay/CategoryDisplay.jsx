import React, { useState, useEffect, useRef } from "react";
import Card from "../../components/Card/Card";
import './Loader.css';
import { fetchEventsByCategory } from "../../api"; // Import the function that fetches events by category
import { useNavigate } from "react-router-dom";

const CategoryDisplay = ({ category }) => {
  const [cards, setCards] = useState([]); // Cards fetched from API
  const [visibleCards, setVisibleCards] = useState(9); // Show 9 cards initially
  const [loading, setLoading] = useState(false); // Track loading state
  const loadMoreRef = useRef(null); // Ref to detect when user scrolls near the bottom
  const navigate = useNavigate();
  

  // Fetch events by category when the component mounts or the category changes
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Start loading
      try {
        const fetchedEvents = await fetchEventsByCategory(category); // Fetch events by category
        setCards(fetchedEvents); // Set the cards state with the fetched events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      setLoading(false); // Stop loading
    };

    fetchEvents();
  }, [category]); // Fetch new events when the category changes

  // Load more cards when the user scrolls to the bottom
  const loadMoreCards = () => {
    if (visibleCards >= cards.length) {
      return; // Stop loading more cards if all events are already loaded
    }

    setLoading(true); // Start loading
    setTimeout(() => {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 9); // Load 9 more cards
      setLoading(false); // Stop loading
    }, 1000); // Simulate network delay (adjust as needed)
  };

  // Intersection Observer to detect when loadMoreRef is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCards();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [cards, visibleCards]); // Added dependency on cards and visibleCards

  return (
    <>
      <div className=" cat-name h-full w-full py-10 px-10 text-6xl font-bold text-center bg-grey2">
        {category}
        <div className="card h-fit w-full py-10 px-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 space-y-25">
          {/* Render only the visible cards */}
          {cards.slice(0, visibleCards).map((card) => (
            <Card 
              key={card._id}  // Use unique identifier from MongoDB
              imageUrl={card.backgroundImageLink}
              eventName={card.name} // Assuming name field holds the event name
              onClick={() => navigate(`/activities/${card.category}/${card.name}`,{ state: { name: card.name } })}
            />
          ))}
        </div>

        {/* Loader */}
        {loading && visibleCards < cards.length && ( // Show loader only if there are more cards to load
          <div className="w-full flex justify-center py-5">
            <div className="loader w-10 h-10 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Ref element to trigger loading more cards when in view */}
        {visibleCards < cards.length && ( // Only render this if there are more cards to load
          <div ref={loadMoreRef} className="h-10" />
        )}
      </div>
    </>
  );
};

export default CategoryDisplay;
