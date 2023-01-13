import React from "react";
import { css, Navbar, Link, Text, Dropdown } from "@nextui-org/react";
import { CartIcon, ToutemLogo, ToggleTheme, BrandLogo } from "../";
import { BsChevronDown } from "react-icons/bs";
import menuItemsCategory from "../../utils/menuItemsCategory";





const MyNavbar = () => {
  // const menuItems = [
  //   {name: "all products", slug: ''},
  //   { name: "natural cosmetics", slug: "cosmetic" },
  //   { name: "essential oils", slug: "oil" },
  //   { name: "packs", slug: "pack" },
  //   { name: "diffusers", slug: "diffuser" },
  //   { name: "natural soaps", slug: "soap" },
  // ];
  
  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <BrandLogo />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" css={{ fontSize: "12px" }}>
          <Navbar.Link href="/">HOME</Navbar.Link>
          <Navbar.Link href="#">ABOUT US</Navbar.Link>
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
                  <Link href={`/shop/${item.slug}`} css={{ color: "inherit" }}>
                    {item.name.toUpperCase()}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="#">CONTACT</Navbar.Link>
        </Navbar.Content>
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
                  <Link href={`/shop/${item.slug}`} css={{ color: "inherit" }}>
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
