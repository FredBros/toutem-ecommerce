import React from "react";
import {  Navbar, Text, Dropdown } from "@nextui-org/react";
import { CartIcon, ToggleTheme, BrandLogo, NavbarLinks } from "../";
import { BsChevronDown } from "react-icons/bs";
import menuItemsCategory from "../../utils/menuItemsCategory";
import Link from "next/link"






const MyNavbar = () => {

  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <BrandLogo />
        </Navbar.Brand>
        <NavbarLinks />
        <Navbar.Content>
          <ToggleTheme />
          <Navbar.Link href="#">
            <CartIcon />
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse showIn="xs">
          <Navbar.CollapseItem>
            <Link href="/" color="inherit">
              HOME
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="#" color="inherit">
              ABOUT US
            </Link>
          </Navbar.CollapseItem>
          <Dropdown>
            <Navbar.CollapseItem>
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
                <Text size={18}>SHOP</Text>
              </Dropdown.Button>
            </Navbar.CollapseItem>
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
          <Navbar.CollapseItem>
            <Link href="#" color="inherit">
              CONTACT
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      <style jsx>{`
        .nav-link {
          font-size: 12px;
        }
      `}</style>
    </>
  );
};

export default MyNavbar;
