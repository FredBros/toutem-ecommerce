import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Text } from "@nextui-org/react";
import { HomePage } from "../src/components";
import { client } from "../src/lib/client";
import { useState, useContext, useEffect } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { DataContext} from "../src/context/DataContext";
import {
  DataContextType,
  Banner,
  CategoriesSectionData,
  Product,
  Products,
  FeaturedData,
  BlogPostData
} from "../src/@types/data";



 

type Props = {
  bannerData: Banner[];
  categoriesSectionData: CategoriesSectionData;
  bestSellersData: Products;
  featuredData: FeaturedData;
  trendsData: Products;
  blogPostData : BlogPostData;
};

export default function Home({
  bannerData,
  categoriesSectionData,
  bestSellersData,
  featuredData,
  trendsData,
  blogPostData,
}: Props) {
  const {
    addBannerData,
    addCategoriesSectionData,
    addBestSellersData,
    addFeaturedData,
    addTrendsData,
    addBlogPostData,
  } = useContext(DataContext);

  useEffect(() => {
    addBannerData(bannerData[0]);
    addCategoriesSectionData(categoriesSectionData);
    addBestSellersData(bestSellersData);
    addFeaturedData(featuredData);
    addTrendsData(trendsData);
    addBlogPostData(blogPostData);
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const query = '*[_type == "product"]';
  // const products = await client.fetch(query);
  const categoriesQuery = '*[_type == "categoriesSection"]';
  const categoriesSectionData: [] = await client.fetch(categoriesQuery);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData: [] = await client.fetch(bannerQuery);
  const bestSellersQuery = '*[_type == "product" ] | order(soldCount desc)[0...2]';
  const bestSellersData: [] = await client.fetch(bestSellersQuery);
  const featuredQuery = '*[_type == "featured" ] | order(_updatedAt desc)[0]'
  const featuredData: {} = await client.fetch(featuredQuery);
  const trendQuery = '*[_type == "product" && isFeatured== true]';
  const trendsData: [] = await client.fetch(trendQuery);
  const blogPostQuery = '*[_type == "blogPost" ]';
  const blogPostData: [] = await client.fetch(blogPostQuery);
  return {
    props: {
      bannerData,
      categoriesSectionData,
      bestSellersData,
      featuredData,
      trendsData,
      blogPostData
    }, // will be passed to the page component as props
  };
};
