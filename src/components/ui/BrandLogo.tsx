import React from 'react'
import {ToutemLogo} from "../"
import { Link, Text } from "@nextui-org/react";

const BrandLogo = () => {
  return (   
      <Link href="/">
        <ToutemLogo />
        <Text css={{ paddingLeft: "20px" }}>Toutem</Text>
      </Link>
  );
}

export default BrandLogo