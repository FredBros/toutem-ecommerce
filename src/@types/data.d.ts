export interface Banner {
  title?: string;
  text?: string;
  image?: {};
}

export  interface Product {
  category?: [];
  details?: string;
  image?: {};
  name? : string;
  price? : number;
  slug? : {};
  soldCount? : number;
  summary? : string;
}
export type Products = Product[]

export interface CategoriesSection {
  image: {};
  subTitle: string;
  text: string;
  title: string;
  category: string;
}

export interface FeaturedData {
  buttonLink: string;
  buttonText: string;
  image: {};
  text: string;
}

export type CategoriesSectionData = CategoriesSection[];

export type DataContextType = {
  banner: Banner;
  categoriesSectionData: CategoriesSectionData;
  bestSellersData: Products;
  // setBanner: Dispatch<SetStateAction<Banner>>;
  // setCategoriesSectionData: Dispatch<SetStateAction<CategoriesSectionData>>;
  addBannerData: (data: Banner) => void;
  addCategoriesSectionData: (data: CategoriesSectionData) => void;
  addBestSellersData: (data: Products) => void;
};
