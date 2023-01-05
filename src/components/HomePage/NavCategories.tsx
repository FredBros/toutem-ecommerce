import React, { useContext } from "react";
import { CategorieNavCard, CategoryDetails } from "../";
import {Blob} from "../"
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";

type Props = {
  activeCategory: string;
  setActiveCategory: (value: string) => void;
};



const NavCategories = ({activeCategory, setActiveCategory}:Props) => {
  const { categoriesSectionData } = useContext(DataContext);
  return (
    <>
      <div className="nav-categories-wrap">
        <div className="nav-categories">
          {categoriesSectionData.map((category) => {
            console.log(category);
            return (
              <div className="category-section" key={uuidv4()}>
                <CategorieNavCard
                  key={uuidv4()}
                  data={category}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
                <CategoryDetails
                  data={category}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              </div>
            );
          })}
        </div>
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