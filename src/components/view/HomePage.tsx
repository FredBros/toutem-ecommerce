import React from 'react'
import { Banner, CategoriesSection, BestSellersSection } from "../"; 


const HomePage = () => {
  return (
    <>
      <section>
        <Banner/>

        <style jsx>{`
          section {
            padding: 3vw;
          }
        `}</style>
      </section>
      <section>
        <CategoriesSection/>
      </section>
      <section>
<BestSellersSection/>
      </section>
    </>
  );
};

export default HomePage