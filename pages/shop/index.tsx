import React from 'react'
import {Shop} from "../../src/components"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import {client} from "../../src/lib/client"
import {
  Products,
} from "../../src/@types/data";

type Props = {
    products : Products
}
const shop = ({products}:Props) => {
  return (
    <><Shop products={products}/></>
  )
}

export default shop

export const getServerSideProps: GetServerSideProps = async () => {
    const featuredQuery = '*[_type == "product" && isFeatured == true ]';
    const featuredProducts = await client.fetch(featuredQuery);
    const notFfeaturedQuery = '*[_type == "product" && isFeatured != true ]';
    const notFeaturedProducts = await client.fetch(notFfeaturedQuery);
    const products = featuredProducts.concat(notFeaturedProducts);

     return {
       props: { products }, 
     };
};