import React from 'react'
import { Pack, Cosmetic, Diffuser, Oil, Soap } from "../";

type Props = {
  category: string
  color?: string
};

const CategoryLogo = ({category, color}: Props) => {
    switch (category) {
      case "soap":
        return <Soap color={color}/>;
      case "diffuser":
        return <Diffuser color={color} />;
      case "pack":
        return <Pack color={color} />;
      case "oil":
        return <Oil color={color} />;
      case "cosmetic":
        return <Cosmetic color={color} />;
    }
    return null;
  
}

export default CategoryLogo