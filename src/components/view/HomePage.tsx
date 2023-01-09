import React from 'react'
import {
  Banner,
  CategoriesSection,
  BestSellersSection,
  FeaturedSection,
} from "../"; 


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
      <section>
<FeaturedSection/>
      </section>
    </>
  );
};

export default HomePage