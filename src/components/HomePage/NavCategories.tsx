import React, { useContext, useState, useEffect } from "react";
import { CategorieNavCard, CategoryDetails } from "../";
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import MediaQuery from "react-responsive";





const NavCategories = () => {
  const { categoriesSectionData } = useContext(DataContext);
    const [activeCategory, setActiveCategory] = useState("cosmetic");
const handleToggle = (category: string) => {
  if (activeCategory === category) return setActiveCategory("");
  setActiveCategory(category);
};


  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if(!isLoaded) return null


  return (
    <>
      <div className="nav-categories-wrap">
        <div className="nav-categories">
          {categoriesSectionData.map((categoryData) => {
            return (
              <div className="category-section" key={uuidv4()}>
                <CategorieNavCard
                  key={uuidv4()}
                  title={categoryData.title}
                  category={categoryData.category}
                  isActive={activeCategory == categoryData.category}
                  activeCategory={activeCategory}
                  onToggle={() => handleToggle(categoryData.category)}
                />
                <MediaQuery maxWidth={960}>
                  <CategoryDetails
                    data={categoryData}
                    isActive={activeCategory == categoryData.category}
                  />
                </MediaQuery>
              </div>
            );
          })}
        </div>
        <MediaQuery minWidth={961}>
          <div className="category-details-large">
            {categoriesSectionData.map((categoryData) => {
              return (
                <div key={uuidv4()}>
                  <CategoryDetails
                    data={categoryData}
                    isActive={activeCategory == categoryData.category}
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