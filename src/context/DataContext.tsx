import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Banner,
  CategoriesSection,
  DataContextType,
  CategoriesSectionData,
} from "../@types/data";

interface Props {
  children: React.ReactNode;
}

export const DataContext = createContext<DataContextType>({
  banner: {},
  categoriesSectionData: [],
  addBannerData: () => null,
  addCategoriesSectionData: () => null,
});

export const DataProvider  = ({children}: Props) => {
  const [banner, setBanner] = useState< Banner>({})
  const [categoriesSectionData, setCategoriesSectionData] =
    useState<CategoriesSectionData>([]);

const addBannerData = (data: Banner) => setBanner(data)
const addCategoriesSectionData = (data: CategoriesSectionData) =>
  setCategoriesSectionData(data)

    

    return (
      <DataContext.Provider
        value={{
          banner,
          addBannerData,
          categoriesSectionData,
          addCategoriesSectionData,
        }}
      >
        {children}
      </DataContext.Provider>
    );
}

// export const useDataContext = () => useContext(DataContext);