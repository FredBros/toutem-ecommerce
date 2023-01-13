import React, {useState, useEffect} from 'react'
import { css, Navbar, Text, Link as LinkUI, Dropdown } from "@nextui-org/react";
import { useRouter } from "next/router";
import menuItemsCategory from "../../utils/menuItemsCategory";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link"

interface QParams extends ParsedUrlQuery {
  category?: string;
}


const DropDownCategory = () => {
  const router = useRouter();
  const { category }: QParams = router.query;
  let categoryItem;

const categoryName =(category:string | undefined) => {
if (!category) return "all products"
else  {
   categoryItem = menuItemsCategory.find(
      (item) => item.slug === category)
      if(categoryItem!==undefined) return  categoryItem.name
  }
  return ""
}
  
  const [selected, setSelected] = useState<string>("");
  useEffect(() => {
    setSelected(()=> categoryName(category));
  }, [router.query]);

  return (
    <div className="dropdown-wrap">
      <Dropdown>
        <Dropdown.Button>{selected?.toUpperCase()}</Dropdown.Button>
        <Dropdown.Menu aria-label="Shop categories">
          {menuItemsCategory.map((item) => (
            <Dropdown.Item key={item.slug} aria-label={item.name}>
              <Link href={`/shop/${item.slug}`} style={{ color: "inherit" }}>
                <Text>{item.name.toUpperCase()}</Text>
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <style jsx>{`
        .dropdown-wrap {
          position: fixed;
          z-index: 10;
          padding-left: 5vw;
        }
      `}</style>
    </div>
  );
}

export default DropDownCategory