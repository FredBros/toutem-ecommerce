import React, {useState} from 'react'
import {NavCategories} from "../"



const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState("cosmetic");
  return (
    <div>
      <NavCategories
        activeCategory ={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
};

export default CategoriesSection