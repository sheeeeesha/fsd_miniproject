//Category.jsx
import React from "react";
import NavbarMain from "../../components/NavbarMain/NavbarMain";
import CategoryDisplay from "../../components/CategoryDisplay/CategoryDisplay";

import { useLocation } from 'react-router-dom';

const Category = () => {
  const location = useLocation();
  const category = location.state?.category || 'Category'; // Default if no state

  return (
    <>
      <NavbarMain />
      
      <CategoryDisplay category={category} />
    </>
  );
};

export default Category;

