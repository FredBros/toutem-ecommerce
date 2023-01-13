import React from 'react'
import { GetStaticProps } from "next";
import { Product, Products } from "../../../src/@types/data";
import { client }from "../../../src/lib/client"
import {ProductPage} from "../../../src/components"


type Props = {
  product: Product;
  maylikeProducts: Products
};


const Product = ({ product, maylikeProducts }: Props) => {
  return (
    <div>
      <ProductPage product={product} maylikeProducts={maylikeProducts} />
    </div>
  );
};

export default Product;


export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{slug}`
    const products = await client.fetch(query);
  const paths = products.map((product:Product) => ({
    params: { slug: product.slug.current },
  }));
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!;
  const slug = params.slug;

  const query = `*[_type == "product" && slug.current=="${slug}"]`;
  const res = await client.fetch(query);
  const product = res[0]
  const categoryQuery = `*[_type == "product"  && category[0]=="${product.category}"]`;
  const maylikeProducts = await client.fetch(categoryQuery);


  return {
    props: { product, maylikeProducts },
  };
};