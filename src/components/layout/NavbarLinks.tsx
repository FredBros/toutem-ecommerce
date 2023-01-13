import React from 'react'
import {  Navbar, Text, Dropdown } from "@nextui-org/react";
import { BsChevronDown } from "react-icons/bs";
import menuItemsCategory from "../../utils/menuItemsCategory";
import Link from "next/link";


const NavbarLinks = () => {
  return (
    <Navbar.Content hideIn="xs" css={{ fontSize: "12px" }}>
      <Navbar.Item>
        <Link href="/" style={{ color: "inherit" }}>
          {" "}
          HOME{" "}
        </Link>
      </Navbar.Item>
      <Navbar.Item>
        <Link href="#" style={{ color: "inherit" }}>
          ABOUT US
        </Link>
      </Navbar.Item>
      <Dropdown>
        <Navbar.Item>
          <Dropdown.Button
            aria-label="Shop"
            auto
            light
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
            }}
            iconRight={<BsChevronDown />}
            ripple={false}
          >
            SHOP
          </Dropdown.Button>
        </Navbar.Item>
        <Dropdown.Menu aria-label="Shop">
          {menuItemsCategory.map((item) => (
            <Dropdown.Item key={item.slug} aria-label={item.name}>
              <Link href={`/shop/${item.slug}`} style={{ color: "inherit" }}>
                {item.name.toUpperCase()}
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Navbar.Item>
        <Link href="#" style={{ color: "inherit" }}>
          CONTACT
        </Link>
      </Navbar.Item>
    </Navbar.Content>
  );
}

export default NavbarLinks