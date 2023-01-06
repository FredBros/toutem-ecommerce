import React, { useContext, useState } from "react";
import { CategorieNavCard, CategoryDetails } from "../";
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import MediaQuery from "react-responsive";

// type Props = {
//   activeCategory: string;
//   setActiveCategory: (value: string) => void;
// };



const NavCategories = () => {
  const { categoriesSectionData } = useContext(DataContext);
    const [activeCategory, setActiveCategory] = useState("cosmetic");


  return (
    <>
      <div className="nav-categories-wrap">
        <div className="nav-categories">
          {categoriesSectionData.map((category) => {
            return (
              <div className="category-section" key={uuidv4()}>
                <CategorieNavCard
                  key={uuidv4()}
                  data={category}
                  isActive={activeCategory == category.category}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
                <MediaQuery maxWidth={960}>
                  <CategoryDetails
                    data={category}
                    activeCategory={activeCategory}
                    isActive={activeCategory == category.category}
                  />
                </MediaQuery>
              </div>
            );
          })}
        </div>
        <MediaQuery minWidth={961}>
          <div className="category-details-large">
            {categoriesSectionData.map((category) => {
              return (
                <div key={uuidv4()}>
                  <CategoryDetails
                    data={category}
                    activeCategory={activeCategory}
                    isActive={activeCategory == category.category}
                  />
                </div>
              );
            })}
          </div>
        </MediaQuery>
      </div>

      <style jsx>{`
        .nav-categories {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px;
        }
        .category-section {
          display: flex;
          flex-direction: column;
          
        }
        @media screen and (min-width: 960px) {
          .nav-categories {
            flex-direction: row;
            gap: 0;
          }
        }
      `}</style>
    </>
  );
};

export default NavCategories