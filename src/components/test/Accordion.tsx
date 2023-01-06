import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import {v4 as uuidv4} from "uuid"
import AccordionItem from "./AccordionItem";

const Accordion = () => {

  const { categoriesSectionData } = useContext(DataContext);
  const [activeCategory, setActiveCategory] = useState("cosmetic");

  const handleToggle = (category:string) => {
    if(activeCategory===category) return setActiveCategory("")
    setActiveCategory(category)
  }
  return <div className="accordion">{categoriesSectionData.map((categoryData)=>(
    <AccordionItem key={uuidv4()} data={categoryData} onToggle={()=> handleToggle(categoryData.category)} isActive= {activeCategory===categoryData.category} />
  ))}</div>;
};

export default Accordion;
