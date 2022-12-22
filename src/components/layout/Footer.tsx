import React from "react";
import { Container, Grid, Text } from "@nextui-org/react";
import { BrandLogo, FooterItem } from "../";
import useMediaQuery from "../../utils/hooks/useMediaQuery";

const Footer = () => {
  const isMd = useMediaQuery(960);
  return (
    <>
      <Container
        fluid
        css={{ backgroundColor: "$backgroundContrast", maxWidth: "none" }}
      >
        <div className="brand-wrap">
          <BrandLogo />
        </div>
        <Grid.Container
          justify="center"
          direction={isMd ? "column" : "row"}
          alignContent="center"
          alignItems="center"
          css={{ p: "$11", gap: "48px" }}
        >
          <Grid>
            <FooterItem
              title={"Customer Support"}
              text={[
                "Shipping",
                "Free Return",
                "Track your Order",
                "Gift Card",
              ]}
            />
          </Grid>
          <Grid>
            <FooterItem
              title={"About Us"}
              text={[
                "Our Values",
                "Sustainability",
                "Brand Ambassadors",
                "Fitness Professionals",
              ]}
            />
          </Grid>
          <Grid>
            <FooterItem
              title={"Customer Service"}
              text={[
                "Help",
                "Leader Support",
                "Pleasant Grove Product Center",
                "Recall—Important Safety Information",
              ]}
            />
          </Grid>
        </Grid.Container>
        <Text size="$xs" css={{textAlign: "center"}}>
          copyright © 2022 Toutem
          <br />
          all rights reserved.
        </Text>
      </Container>

      <style jsx>{`
        .brand-wrap {
          position: absolute;
        }
      `}</style>
    </>
  );
};

export default Footer;
