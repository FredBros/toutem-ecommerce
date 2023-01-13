import React from 'react'
import { DropDownCategory, ProductsSection } from "../";
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  GetStaticPropsContext,
  GetServerSideProps,
} from "next";
import { client } from "../../lib/client";
import { Products } from "../../../src/@types/data";

type Props = {
  products: Products;
};


const Shop = ({products}:Props) => {

  return (
    <>
      <div className="shop-wrap">
        <DropDownCategory />
        <div className="products-section-wrap">
          <ProductsSection products={products} />
        </div>
      </div>

      <style jsx>{`
        .shop-wrap {
          padding-top: 50px;
        }
        .products-section-wrap {
          padding-top: 50px;
        }
        @media screen and (min-width: 450px) {
          .products-section-wrap {
            max-width: 80%;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}

export default Shop

