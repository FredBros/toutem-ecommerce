import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Banner,
  CategoriesSection,
  DataContextType,
  CategoriesSectionData,
  Products,
} from "../@types/data";

interface Props {
  children: React.ReactNode;
}

export const DataContext = createContext<DataContextType>({
  banner: {},
  categoriesSectionData: [],
  addBannerData: () => null,
  addCategoriesSectionData: () => null,
  bestSellersData : [],
  addBestSellersData: () => null,
});

export const DataProvider  = ({children}: Props) => {
  const [banner, setBanner] = useState< Banner>({})
  const [categoriesSectionData, setCategoriesSectionData] =
    useState<CategoriesSectionData>([]);
    const [bestSellersData, setBestSellersData] = useState<Products>([]);

const addBannerData = (data: Banner) => setBanner(data)
const addCategoriesSectionData = (data: CategoriesSectionData) =>
  setCategoriesSectionData(data)
  const addBestSellersData = (data: Products) => setBestSellersData(data)

    

    return (
      <DataContext.Provider
        value={{
          banner,
          addBannerData,
          categoriesSectionData,
          addCategoriesSectionData,
          bestSellersData,
          addBestSellersData,
        }}
      >
        {children}
      </DataContext.Provider>
    );
}

// export const useDataContext = () => useContext(DataContext);