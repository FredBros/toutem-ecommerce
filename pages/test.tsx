import React, { useContext } from "react";
import { DataContext } from "../src/context/DataContext";
import { ProductCard, CarouselProducts } from "../src/components";



const Test = () => {
  const { trendsData } = useContext(DataContext);
  console.log(trendsData);
  return (
    <>
      <div>test</div>
      <CarouselProducts data={trendsData} />
    </>
  );
}

export default Test