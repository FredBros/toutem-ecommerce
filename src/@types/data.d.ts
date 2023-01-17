export interface Banner {
  title?: string;
  text?: string;
  image?: {};
}

type Image = {
  _type: string;
  asset: {
    _ref: string;
    _type: string
  };
};

export  interface Product {
  _id: string;
  category: [];
  details?: string;
  image: Image;
  name: string;
  price: number;
  slug: {
    current: string;
  };
  soldCount?: number;
  summary?: string;
  isFeatured?: boolean;
  stock: number;
  qtyInCart?: number;
}
export type Products = Product[]

export interface CategoriesSection {
  image?: {};
  subTitle?: string;
  text?: string;
  title: string;
  category: string;
}

export interface FeaturedData {
  buttonLink?: string;
  buttonText?: string;
  image?: {};
  text?: string;
}
export interface BlogPost {
  image? : {};
  text? : string;
  title? : string;
  url? : string | Url;
}

export type BlogPostData = BlogPost[];

export type CategoriesSectionData = CategoriesSection[];

export type DataContextType = {
  banner: Banner;
  categoriesSectionData: CategoriesSectionData;
  bestSellersData: Products;
  featuredData: FeaturedData;
  trendsData: Products;
  blogPostData: BlogPostData;
  addFeaturedData: (data: FeaturedData) => void;
  addBannerData: (data: Banner) => void;
  addCategoriesSectionData: (data: CategoriesSectionData) => void;
  addBestSellersData: (data: Products) => void;
  addTrendsData: (data: Products) => void;
  addBlogPostData: ((data: BlogPostData) => void) ;
};

export type ShopContextType = {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  qty: number;
  setQty: Dispatch<SetStateAction<number>>;
  incQty: () => void;
  decQty: () => void;
  decQty;
  cartItems: Products;
  totalPrice: number;
  totalQuantities: number;
  onAdd: (product: Product, quantity: number) => void;
  toggleCartItemQuantity: (id: string, value: string) => void;
  onRemove: (id: string) => void;
  setCartItems: Dispatch<Products<boolean>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  setTotalQuantities: Dispatch<SetStateAction<number>>;
};

export type CartProduct = {
  price?: number;
  _id : string;
  quantity : number
}

export type CartItems = CartProduct[]
