import React from 'react'
import {Banner, CategoriesSection} from "../" 


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
    </>
  );
};

export default HomePage