import React from "react";
import { css, Navbar, Link, Text } from "@nextui-org/react";
import { CartIcon, ToutemLogo, ToggleTheme, BrandLogo } from "../";

const MyNavbar = () => {
  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <BrandLogo />
          {/* <Text css={{ paddingLeft: "20px" }}>Toutem</Text> */}
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" css={{ fontSize: "12px" }}>
          <Navbar.Link href="#">HOME</Navbar.Link>
          <Navbar.Link href="#">ABOUT US</Navbar.Link>
          <Navbar.Link href="#">SHOP</Navbar.Link>
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
            <Link href="#">HOME</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="#">ABOUT US</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="#">SHOP</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="#">CONTACT</Link>
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

{
  /* <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M17.262 10.0581L12.4513 18.8401C14.3523 22.2078 15.9036 23.3903 18.9512 23.27C21.9358 23.1521 25.3719 19.0921 23.4369 15.6179L18.619 7.0753C18.4467 7.65027 17.4396 9.68849 17.2619 10.0581L17.262 10.0581ZM10.1434 20.6543C4.8786 27.3598 -2.71675 19.959 0.977333 14.1981C0.977333 14.1981 4.90991 7.3063 6.43925 4.62135C7.62519 2.53926 8.95382 1.22901 10.6813 0.809006C12.7879 0.29685 15.2547 1.4106 16.5697 3.44183C17.4837 4.85338 18.2925 6.1454 16.8671 8.5858C16.6977 8.87568 10.4768 20.2296 10.1434 20.6542V20.6543ZM10.5191 8.2514C9.08019 7.4219 9.08019 5.33685 10.5191 4.50735C11.9579 3.67785 13.7662 4.72035 13.7662 6.37935C13.7662 8.03835 11.9579 9.0809 10.5191 8.2514Z"
    fill="#5FD788"
  />
</svg>; */
}