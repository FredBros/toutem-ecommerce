export interface Banner {
  title?: string;
  text?: string;
  image?: {};
}

export interface CategoriesSection {
  image: {};
  subTitle: string;
  text: string;
  title: string;
  category: string;
}

export type CategoriesSectionData = CategoriesSection[];

export type DataContextType = {
  banner: Banner;
  categoriesSectionData: CategoriesSectionData;
  // setBanner: Dispatch<SetStateAction<Banner>>;
  // setCategoriesSectionData: Dispatch<SetStateAction<CategoriesSectionData>>;
  addBannerData: (data: Banner) => void;
  addCategoriesSectionData: (data: CategoriesSectionData) => void;
};
