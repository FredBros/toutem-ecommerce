import React from 'react'
import menuItemsCategory from "../../src/utils/menuItemsCategory"
import {
  GetStaticProps,
} from "next";
import { client }from "../../src/lib/client"
import { Products} from "../../src/@types/data"
import {Shop} from "../../src/components/"
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  category: string;
}



type Props ={
    products: Products
}

const ShopByCategory = ({products}:Props) => {
  return (
    <>
      <Shop products={products}/>
    </>
  );
}

export default ShopByCategory;

export const getStaticPaths = async () => {

  const categorySlugArr = menuItemsCategory.slice(1)
  const paths = categorySlugArr.map((category) => ({ params: { category: category.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!
  const category = params.category;

const featuredQuery = `*[_type == "product" && isFeatured == true && category[0]=="${category}"]`;
    const featuredProducts = await client.fetch(featuredQuery);
    const notFfeaturedQuery = `*[_type == "product" && isFeatured != true && category[0]=="${category}"] |  order(soldCount) | order(category[0])`;
    const notFeaturedProducts = await client.fetch(notFfeaturedQuery);
    const products = featuredProducts.concat(notFeaturedProducts);


  return {
    props: { products },
  };
};
