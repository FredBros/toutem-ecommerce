import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Banner,
  CategoriesSection,
  DataContextType,
  CategoriesSectionData,
  Products,
  FeaturedData,
  BlogPostData,
} from "../@types/data";

interface Props {
  children: React.ReactNode;
}

export const DataContext = createContext<DataContextType>({
  banner: {},
  addBannerData: () => null,
  categoriesSectionData: [],
  addCategoriesSectionData: () => null,
  bestSellersData: [],
  addBestSellersData: () => null,
  featuredData: {},
  addFeaturedData: () => null,
  trendsData: [],
  addTrendsData: () => null,
  blogPostData: [],
  addBlogPostData: () => null,
});

export const DataProvider  = ({children}: Props) => {
  const [banner, setBanner] = useState< Banner>({})
  const [categoriesSectionData, setCategoriesSectionData] =
    useState<CategoriesSectionData>([]);
    const [bestSellersData, setBestSellersData] = useState<Products>([]);
    const [featuredData, setFeaturedData] = useState<FeaturedData>({});
    const [trendsData, setTrendsData] = useState<Products>([]);
    const [blogPostData, setBlogPostData] = useState<BlogPostData>([]);


const addBannerData = (data: Banner) => setBanner(data)
const addCategoriesSectionData = (data: CategoriesSectionData) =>
  setCategoriesSectionData(data)
  const addBestSellersData = (data: Products) => setBestSellersData(data)
  const addFeaturedData = (data: FeaturedData) => setFeaturedData(data);
  const addTrendsData = (data: Products) => setTrendsData(data);
  const addBlogPostData = (data: BlogPostData) => setBlogPostData(data);

    

    return (
      <DataContext.Provider
        value={{
          banner,
          addBannerData,
          categoriesSectionData,
          addCategoriesSectionData,
          bestSellersData,
          addBestSellersData,
          featuredData,
          addFeaturedData,
          trendsData,
          addTrendsData,
          blogPostData,
          addBlogPostData,
        }}
      >
        {children}
      </DataContext.Provider>
    );
}

// export const useDataContext = () => useContext(DataContext);