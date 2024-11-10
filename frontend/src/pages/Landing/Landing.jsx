import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import SearchBox from '../../components/SearchBox/SearchBox';
import Wyd from '../../components/Wyd/Wyd';
import AboutUs from '../../components/AboutUs/AboutUs';
import SearchBox2 from '../../components/SearchBox2/SearchBox2';
import Footer from '../../components/Footer/Footer';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const Landing = () => {
  const [category, setCategory] = useState("Category");
  const [current, setCurrent] = useState("Do Something Fun");
  return (
    
    <div className='bg-white1'>
      <Navbar/>
      <SearchBox2 current={current}
          setCurrent={setCurrent}
          category={category}
          setCategory={setCategory}/>
      <ImageSlider/>
      <AboutUs/>
      <Wyd/>
      <Footer/>
    </div>
  )
}

export default Landing