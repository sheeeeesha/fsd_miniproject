import React from "react";
// import { useState } from "react";
import NavbarSpecific from "../../components/NavbarSpecific/NavbarSpecific";
import ActivityInfo from "../../components/ActivityInfo/ActivityInfo";
import ActivityOverview from "../../components/ActivityOverview/ActivityOverview";
import ActivityPhotos from "../../components/ActivityPhotos/ActivityPhotos";
import ActivityRatings from "../../components/ActivityRatings/ActivityRatings";
import ActivityLoc from "../../components/ActivityLoc/ActivityLoc";

const Activities = () => {
  // const [category, setCategory] = useState("Category");
  
  return (
    <div>
      <NavbarSpecific />
      <ActivityOverview />
      <div>
        <div className="flex justify-center">
          <ActivityPhotos />
        </div>
        <div className="flex justify-evenly">
          <ActivityInfo />
          <ActivityRatings />
          <ActivityLoc />
        </div>
      </div>
    </div>
  );
};

export default Activities;
