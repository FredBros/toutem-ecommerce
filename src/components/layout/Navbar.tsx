import React, { useContext } from "react";
import {  Navbar } from "@nextui-org/react";
import {
  CartIcon,
  ToggleTheme,
  BrandLogo,
  NavbarLinks,
  NavbarMobile,
  Cart
} from "../";
import { ShopContext } from "../../context/ShopContext";






const MyNavbar = () => {
const { totalQuantities, setShowCart } = useContext(ShopContext);
  return (
    <>
      <Navbar variant="sticky" css={{maxWidth: "none"}}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <BrandLogo />
        </Navbar.Brand>
        <NavbarLinks />
        <Navbar.Content>
          <ToggleTheme />
          <Navbar.Item>
            <CartIcon
              totalQuantities={totalQuantities}
              setShowCart={setShowCart}
            />
          </Navbar.Item>
          <Cart/>
        </Navbar.Content>
        <Navbar.Collapse showIn="xs">
          <NavbarMobile />
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
