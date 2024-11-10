import React from "react";
import { useState } from "react";

// import SearchBox from "../../components/SearchBox/SearchBox";
import NavbarMain from "../../components/NavbarMain/NavbarMain";
import Wyd from "../../components/Wyd/Wyd";
import Activities from "../Activities/Activities";
import SearchBox2 from "../../components/SearchBox2/SearchBox2";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [category, setCategory] = useState("Category");
  const [current, setCurrent] = useState("Do Something Fun");
  // const [role, setRole] = useState("user");

  return (
    <div>
      <div><NavbarMain /></div>
      
      <SearchBox2
        current={current}
        setCurrent={setCurrent}
        category={category}
        setCategory={setCategory}
      />
      {/* Pass the necessary state to Wyd */}
      <Wyd category={category} setCategory={setCategory} />
      <div className="hidden">
        <Activities category={category} setCategory={setCategory} />
      
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
