import React from 'react'
import {ToutemLogo} from "../"
import {  Text } from "@nextui-org/react";
import Link from "next/link";


const BrandLogo = () => {
  return (
    <>
        <Link href="/">
      <div className="brand-logo">
          <ToutemLogo />
          <Text css={{ paddingLeft: "20px" }}>Toutem</Text>
                </div>

        </Link>
        <style jsx>{`
          .brand-logo {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
    </>
  );
}

export default BrandLogo