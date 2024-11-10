import React from "react";

const AboutUs = () => {
  return (
    <div className="AboutUs w-full h-fit bg-grey2 py-10 px-10" id="AboutUs">
      <h1 className="heading font-bold text-6xl text-center ">
        Things2do-A weekend planner.
      </h1>
      <p className="sub-heading font-bold text-3xl text-center py-2">
        Helping you plan your perfect weekend.
      </p>
      <div className="description flex flex-col space-y-5">
        <div className="row1 h-fit w-full flex flex-col space-x-4 space-y-4">
          <div className="introduciton h-fit w-full text-center  bg-blue1 rounded-lg px-4 py-4 ">
            <p className="text-balance text-2xl my-3 text-center text-grey1 ">Introduction</p>
            <p className="text-balance text-lg my-10 text-grey1">"Things2Do makes weekend planning easy! Discover local events, hidden gems, and popular spots with just a few taps. From concerts to dining out, find curated suggestions for a stress-free, fun-filled weekend."</p>
          </div>
          <div className="usecase bg-blue1 h-fit w-full text-center rounded-lg px-4 py-4">
          <p className="text-balance text-2xl my-3 text-center text-grey1 ">Usecases</p>
          <p className="text-balance text-lg my-10 text-grey1">"With Things2Do, discover weekend activities tailored just for you! Explore local events, top-rated dining spots, popular attractions, and scenic parks nearby. From outdoor adventures to family-friendly outings, there's something for everyone to enjoy."</p>
            
          </div>
        </div>
        <div className="row2 h-full w-full flex-col space-x-4 space-y-4  ">
          <div className="core-features  bg-blue1 h-fit w-full text-center rounded-lg px-4 py-4 ">
          <p className="text-balance text-2xl my-3 text-center text-grey1 ">Core-Features</p>
          <p className="text-balance text-lg my-10 text-grey1"><span className="font-bold">Event Recommendations:</span> Personalized event suggestions based on your location and preferences. <br />
          <span className="font-bold">Location-Based Suggestions:</span> Discover activities and attractions near you. <br /> 
          <span className="font-bold">Customizable Itineraries:</span> Build your weekend schedule and manage your time efficiently. <br />
          <span className="font-bold">Reminders:</span> Get reminders for your planned activities, so you never miss out.</p> 
            
          </div>
          <div className="vision h-fit w-full text-center bg-blue1 rounded-lg px-4 py-4">
          <p className="text-balance text-2xl my-3 text-center text-grey1 ">Mission & Vision</p>
          <p className="text-balance text-lg my-10 text-grey1">"At Things2Do, our mission is to make weekend planning simple and fun. We help users discover unique local experiences tailored to their interests, from events to hidden gems. Our vision is a platform where everyone can find the perfect activity to make each weekend memorable—whether you’re looking to relax, explore, or enjoy time with loved ones."</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
