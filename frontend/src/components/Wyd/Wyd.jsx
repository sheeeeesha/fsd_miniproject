//Wyd.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local image

import adventure from "../Assets/adventure_bg.jpg";
import artgallery from "../Assets/artgallery_bg.jpg";
import bowling from "../Assets/bowling_bg.jpg";
import cafe from "../Assets/cafe_bg.jpg";
import camping from "../Assets/camping_bg.jpg";
import clubbing from "../Assets/clubbing_bg.jpg";
import concert from "../Assets/concert_bg.jpg";
import culturalfestival from "../Assets/culturalfestival_bg.jpg";
import cycling from "../Assets/cycling_bg.jpg";
import dining from "../Assets/dining_bg.jpg";
import educational from "../Assets/educult_bg.jpg";
import entertainment from "../Assets/entertainment_bg.jpg";
import escaperoom from "../Assets/escaperoom_bg.jpeg";
import finedining from "../Assets/finedining_bg.jpg";
import football from "../Assets/football_bg.jpg";
import groupcycle from "../Assets/groupcycle_bg.jpg";
import gym from "../Assets/gym_bg.jpg";
import hiking from "../Assets/hiking_bg.jpg";
import karaoke from "../Assets/karaoke_bg.jpg";
import kayaking from "../Assets/kayaking_bg.jpg";
import livemusic from "../Assets/livemusic_bg.jpg";
import movieTheatre from "../Assets/movie_theatre_bg.jpg";
import museum from "../Assets/museum_bg.jpg";
import nightclubparty from "../Assets/nightclubparty_bg.jpg";
import paragliding from "../Assets/paragliding_bg.jpg";
import pubcrawl from "../Assets/pubcrawl_bg.jpg";
import rockclimbing from "../Assets/rockclimbing_bg.jpg";
import rooftopBar from "../Assets/rooftop_bar_bg.jpg";
import rooftopDining from "../Assets/rooftop_dining_bg.jpg";
import sports from "../Assets/sports_bg.jpg";
import standup from "../Assets/standup_bg.jpg";
import streetfood from "../Assets/streetfood_bg.jpg";
import swimming from "../Assets/swimming_bg.jpg";
import themedRestaurant from "../Assets/themed_restaurant_bg.jpg";
import wineTasting from "../Assets/wine_tasting_bg.jpg";
import yoga from "../Assets/yoga_bg.jpg";
import ziplining from "../Assets/ziplining_bg.jpg";
import learning from "../Assets/learning_bg.jpg";
import fitness from "../Assets/fitness_bg.jpg";
import extreme_sports from "../Assets/extremesports_bg.jpg";
import water_activities from "../Assets/wateractivities_bg.jpg";
import food_drink from "../Assets/foodanddrinks_bg.jpg";



const Wyd = (props) => {
  



  const category_data = [
    {
      CategoryId: 1,
      CategoryName: "Outdoor Adventure",
      backgroundImage: adventure, // Use the imported local image
    },
    {
      CategoryId: 5,
      CategoryName: "Sports",
      backgroundImage: sports,
    },
    {
      CategoryId: 6,
      CategoryName: "Dining",
      backgroundImage: dining,
    },
    {
      CategoryId: 8,
      CategoryName: "Nightlife",
      backgroundImage: clubbing,
    },
    {
      CategoryId: 9,
      CategoryName: "Cultural Experience",
      backgroundImage: educational,
    },
    {
      CategoryId: 12,
      CategoryName: "Entertainment",
      backgroundImage: entertainment,
    },
    {
      CategoryId: 4,
      CategoryName: "Fitness",
      backgroundImage: fitness,
    },
    {
      CategoryId: 3,
      CategoryName: "Extreme Sports",
      backgroundImage: extreme_sports,
    },
    {
      CategoryId: 2,
      CategoryName: "Water Activities",
      backgroundImage: water_activities,
    },
    {
      CategoryId: 7,
      CategoryName: "Food & Drink",
      backgroundImage: food_drink,
    },
    {
      CategoryId: 10,
      CategoryName: "Learning",
      backgroundImage: learning,
    },
    {
      CategoryId: 11,
      CategoryName: "Festivals & Events",
      backgroundImage: entertainment,
    },
  ];
  const adventure_data = [
    {
      eventId: 1,
      eventName: "Hiking",
      backgroundImage: hiking,
      CategoryName: "Outdoor Adventure",
    },
    {
      eventId: 2,
      eventName: "Camping Trip",
      backgroundImage: camping,
      CategoryName: "Outdoor Adventure",
    },
    {
      eventId: 3,
      eventName: "Cycling Route",
      backgroundImage: cycling,
      CategoryName: "Outdoor Adventure",
    },
    {
      eventId: 4,
      eventName: "Zip-lining",
      backgroundImage: ziplining,
      CategoryName: "Outdoor Adventure",
    },
    {
      eventId: 5,
      eventName: "Kayaking",
      backgroundImage: kayaking,
      CategoryName: "Water Activities",
    },
    {
      eventId: 6,
      eventName: "Paragliding",
      backgroundImage: paragliding,
      CategoryName: "Extreme Sports",
    },
  ];
  
  const sports_data = [
    {
      eventId: 1,
      eventName: "Yoga Class",
      backgroundImage: yoga,
      CategoryName: "Fitness",
    },
    {
      eventId: 2,
      eventName: "Gym Session",
      backgroundImage: gym,
      CategoryName: "Fitness",
    },
    {
      eventId: 3,
      eventName: "Swimming",
      backgroundImage: swimming,
      CategoryName: "Water Activities",
    },
    {
      eventId: 4,
      eventName: "Football Match",
      backgroundImage: football,
      CategoryName: "Sports",
    },
    {
      eventId: 5,
      eventName: "Rock Climbing",
      backgroundImage: rockclimbing,
      CategoryName: "Extreme Sports",
    },
    {
      eventId: 6,
      eventName: "Cycling Group",
      backgroundImage: groupcycle,
      CategoryName: "Fitness",
    },
  ];
  
  const dining_data = [
    {
      eventId: 1,
      eventName: "Fine Dining",
      backgroundImage: finedining,
      CategoryName: "Dining",
    },
    {
      eventId: 2,
      eventName: "Street Food Tour",
      backgroundImage: streetfood,
      CategoryName: "Food & Drink",
    },
    {
      eventId: 3,
      eventName: "Café Visit",
      backgroundImage: cafe,
      CategoryName: "Food & Drink",
    },
    {
      eventId: 4,
      eventName: "Rooftop Dining",
      backgroundImage: rooftopDining,
      CategoryName: "Dining",
    },
    {
      eventId: 5,
      eventName: "Wine Tasting",
      backgroundImage: wineTasting,
      CategoryName: "Food & Drink",
    },
    {
      eventId: 6,
      eventName: "Themed Restaurant Visit",
      backgroundImage: themedRestaurant,
      CategoryName: "Dining",
    },
  ];
  
  const clubbing_data = [
    {
      eventId: 1,
      eventName: "Nightclub Party",
      backgroundImage: nightclubparty,
      CategoryName: "Nightlife",
    },
    {
      eventId: 2,
      eventName: "Live Music",
      backgroundImage: livemusic,
      CategoryName: "Nightlife",
    },
    {
      eventId: 3,
      eventName: "Karaoke Night",
      backgroundImage: karaoke,
      CategoryName: "Nightlife",
    },
    {
      eventId: 4,
      eventName: "Rooftop Bar Hangout",
      backgroundImage: rooftopBar,
      CategoryName: "Nightlife",
    },
    {
      eventId: 5,
      eventName: "Pub Crawl",
      backgroundImage: pubcrawl,
      CategoryName: "Nightlife",
    },
  ];
  
  const cultural_data = [
    {
      eventId: 1,
      eventName: "Museum Visit",
      backgroundImage: museum,
      CategoryName: "Cultural Experience",
    },
    {
      eventId: 2,
      eventName: "Art Gallery Tour",
      backgroundImage: artgallery,
      CategoryName: "Cultural Experience",
    },
    {
      eventId: 3,
      eventName: "Workshop",
      backgroundImage: educational,
      CategoryName: "Learning",
    },
    {
      eventId: 4,
      eventName: "Historical Landmark Tour",
      backgroundImage: artgallery,
      CategoryName: "Cultural Experience",
    },
    {
      eventId: 5,
      eventName: "Cultural Festival",
      backgroundImage: culturalfestival,
      CategoryName: "Festivals & Events",
    },
  ];
  
  const entertainment_data = [
    {
      eventId: 1,
      eventName: "Movie Night",
      backgroundImage: movieTheatre,
      CategoryName: "Entertainment",
    },
    {
      eventId: 2,
      eventName: "Theater Performance",
      backgroundImage: clubbing,
      CategoryName: "Entertainment",
    },
    {
      eventId: 3,
      eventName: "Comedy Show",
      backgroundImage: standup,
      CategoryName: "Entertainment",
    },
    {
      eventId: 4,
      eventName: "Concert",
      backgroundImage: concert,
      CategoryName: "Entertainment",
    },
    {
      eventId: 5,
      eventName: "Escape Room",
      backgroundImage: escaperoom,
      CategoryName: "Entertainment",
    },
    {
      eventId: 6,
      eventName: "Bowling Night",
      backgroundImage: bowling,
      CategoryName: "Entertainment",
    },
  ];

  


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    
  };
  const navigate = useNavigate();
  return (
    
    <>
    <div reloadDocument={true} className={props.category==="Category"?" my-20 mx-auto w-5/6 h-fit items-center px-4 py-16 bg-blue1 rounded-xl":"hidden"} id="Discover">
      <div className="heading text-5xl text-center mb-7 text-grey1 font-bold"> What are you doing this weekend ?</div>
      <Slider {...settings}>
        {category_data.map((d) => (
          
          <>
          <div
            key={d.CategoryId}
            className="flex items-center justify-center h-56 bg-cover bg-center bg-white1 rounded-md mx-3"
            style={{
                backgroundImage: `url(${d.backgroundImage})`, // Inline style for dynamic background image
              }}
              onClick={() => navigate(`/activities/${d.CategoryName.toLowerCase()}`, { state: { category: d.CategoryName } })}

          >
            <h1 className="flex items-end justify-center h-full w-full text-3xl font-bold text-white1">
              {d.CategoryName}
            </h1>
          </div>
          <div className="space"></div></>
        ))}
      </Slider>
    </div>



    <div className={props.category==="Outdoor Adventure"?"my-20 mx-auto w-5/6 h-fit items-center px-4 py-16 bg-grey1":"hidden"} id="Discover">
      <div className="heading text-5xl text-center mb-7 text-blue1 font-bold"> What are you doing this weekend ?</div>
      <Slider {...settings}>
        {adventure_data.map((d) => (
          
          <>
          <div
            key={d.eventId}
            className="flex items-center justify-center h-56 bg-cover bg-center bg-grey1 rounded-md mx-3"
            style={{
                backgroundImage: `url(${d.backgroundImage})`, // Inline style for dynamic background image
              }}
              onClick={() => navigate(`/activities/${d.CategoryName.toLowerCase()}`, { state: { category: d.CategoryName } })}

          >
            <h1 className="flex items-end justify-center h-full w-full text-3xl font-bold text-white">
              {d.eventName}
            </h1>
          </div>
          <div className="space"></div></>
        ))}
      </Slider>
    </div>



    <div className={props.category==="Sports and Fitness"?"my-20 mx-auto w-5/6 h-fit items-center px-4 py-16 bg-grey1":"hidden"} id="Discover">
      <div className="heading text-5xl text-center mb-7 text-blue1 font-bold"> What are you doing this weekend ?</div>
      <Slider {...settings}>
        {sports_data.map((d) => (
          
          <>
          <div
            key={d.eventId}
            className="flex items-center justify-center h-56 bg-cover bg-center bg-grey1 rounded-md mx-3"
            style={{
                backgroundImage: `url(${d.backgroundImage})`, // Inline style for dynamic background image
              }}
              onClick={() => navigate(`/activities/${d.CategoryName.toLowerCase()}`, { state: { category: d.CategoryName } })}

          >
            <h1 className="flex items-end justify-center h-full w-full text-3xl font-bold text-white">
              {d.eventName}
            </h1>
          </div>
          <div className="space"></div></>
        ))}
      </Slider>
    </div>



    <div className={props.category==="Entertainment"?"my-20 mx-auto w-5/6 h-fit items-center px-4 py-16 bg-grey1":"hidden"} id="Discover">
      <div className="heading text-5xl text-center mb-7 text-blue1 font-bold"> What are you doing this weekend ?</div>
      <Slider {...settings}>
        {entertainment_data.map((d) => (
          
          <>
          <div
            key={d.eventId}
            className="flex items-center justify-center h-56 bg-cover bg-center bg-grey1 rounded-md mx-3"
            style={{
                backgroundImage: `url(${d.backgroundImage})`, // Inline style for dynamic background image
              }}
              onClick={() => navigate(`/activities/${d.CategoryName.toLowerCase()}`, { state: { category: d.CategoryName } })}

          >
            <h1 className="flex items-end justify-center h-full w-full text-3xl font-bold text-white">
              {d.eventName}
            </h1>
          </div>
          <div className="space"></div></>
        ))}
      </Slider>
    </div>



    <div className={props.category==="Cultural and Educational"?"my-20 mx-auto w-5/6 h-fit items-center px-4 py-16 bg-grey1":"hidden"} id="Discover">
      <div className="heading text-5xl text-center mb-7 text-blue1 font-bold"> What are you doing this weekend ?</div>
      <Slider {...settings}>
        {cultural_data.map((d) => (
          
          <>
          <div
            key={d.eventId}
            className="flex items-center justify-center h-56 bg-cover bg-center bg-grey1 rounded-md mx-3"
            style={{
                backgroundImage: `url(${d.backgroundImage})`, // Inline style for dynamic background image
              }}
              onClick={() => navigate(`/activities/${d.CategoryName.toLowerCase()}`, { state: { category: d.CategoryName } })}

          >
            <h1 className="flex items-end justify-center h-full w-full text-3xl font-bold text-white">
              {d.eventName}
            </h1>
          </div>
          <div className="space"></div></>
        ))}
      </Slider>
    </div>



    <div className={props.category==="Social and Nightlife"?"my-20 mx-auto w-5/6 h-fit items-center px-4 py-16 bg-grey1":"hidden"} id="Discover">
      <div className="heading text-5xl text-center mb-7 text-blue1 font-bold"> What are you doing this weekend ?</div>
      <Slider {...settings}>
        {clubbing_data.map((d) => (
          
          <>
          <div
            key={d.eventId}
            className="flex items-center justify-center h-56 bg-cover bg-center bg-grey1 rounded-md mx-3"
            style={{
                backgroundImage: `url(${d.backgroundImage})`, // Inline style for dynamic background image
              }}
              onClick={() => navigate(`/activities/${d.CategoryName.toLowerCase()}`, { state: { category: d.CategoryName } })}

          >
            <h1 className="flex items-end justify-center h-full w-full text-3xl font-bold text-white">
              {d.eventName}
            </h1>
          </div>
          <div className="space"></div></>
        ))}
      </Slider>
    </div>



    <div className={props.category==="Dining and Food"?"my-20 mx-auto w-5/6 h-fit items-center px-4 py-16 bg-grey1":"hidden"} id="Discover">
      <div className="heading text-5xl text-center mb-7 text-blue1 font-bold"> What are you doing this weekend ?</div>
      <Slider {...settings}>
        {dining_data.map((d) => (
          
          <>
          <div
            key={d.eventId}
            className="flex items-center justify-center h-56 bg-cover bg-center bg-grey1 rounded-md mx-3"
            style={{
                backgroundImage: `url(${d.backgroundImage})`, // Inline style for dynamic background image
              }}
              onClick={() => navigate(`/activities/${d.CategoryName.toLowerCase()}`, { state: { category: d.CategoryName } })}

          >
            <h1 className="flex items-end justify-center h-full w-full text-3xl font-bold text-white">
              {d.eventName}
            </h1>
          </div>
          <div className="space"></div></>
        ))}
      </Slider>
    </div>
    </>
  );
  
};

export default Wyd;

