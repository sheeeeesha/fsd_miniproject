import React from 'react'


import './App.css';    // Imports App-wide styles
import './index.css';  // Imports base styles, resets, etc.

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Activities from './pages/Activities/Activities';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import Landing from './pages/Landing/Landing';
import SearchResult from './pages/SearchResult/SearchResult';
import Category from './pages/CategoryPage/Category';
import Profile from './pages/Profile/Profile';
import Admin from './pages/Admin/Admin';

// import NavbarSpecific from './components/NavbarSpecific/NavbarSpecific';







function App() {
  return (
    <div>
      {/* <Navbar/> */}
      
      {/* <div className='hidden'><NavbarSpecific/></div> */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/activities/:categoryName/:activityName' element={<Activities/>}/>
        <Route path='/activities/:categoryName' element={<Category/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/searchresult/:eventName' element={<SearchResult />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/AdminDashboard' element={<Admin/>} />


      </Routes>
    </div>
    
  );
}



export default App;
