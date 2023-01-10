import React, { useEffect , useState} from "react";
import {
  Banner,
  CategoriesSection,
  BestSellersSection,
  FeaturedSection,
  TrendsSection,
  BlogPostSection,
} from "../"; 





const HomePage = () => {

const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  setIsLoaded(true);
}, []);

if (!isLoaded) return null;

  return (
    <>
      <section>
        <Banner />

        <style jsx>{`
          section {
            padding: 3vw;
          }
        `}</style>
      </section>
      <section>
        <CategoriesSection />
      </section>
      <section>
        <BestSellersSection />
      </section>
      <section>
        <FeaturedSection />
      </section>
      <section>
        <TrendsSection />
      </section>
      <section>
        <BlogPostSection />
      </section>
    </>
  );
};

export default HomePage