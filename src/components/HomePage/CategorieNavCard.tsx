import React from 'react'
import { Card, Text } from "@nextui-org/react";
import { CategoryLogo, Blob, Pack, Cosmetic, Diffuser, Oil, Soap } from "../";


type Props = {
  data: {
    title: string;
    category: string;
  };
  activeCategory: string;
  isActive: boolean;
  onToggle: any;
};

const CategorieNavCard = ({
  data,
  isActive,
  onToggle,
}: Props) => {  
    // let isActive = activeCategory == data.category ? true : false

  return (
    <div className="card-wrap">
      <Card
        isPressable
        onPress={onToggle}
        isHoverable
        variant="bordered"
        css={{
          h: "100%",
          w: "100%",
          py: "10px",
          borderRadius: "0 var(--nextui-radii-xl)",
          backgroundColor: isActive
            ? "var(--nextui-colors-primary)"
            : "var(--nextui--cardColor)",
        }}
      >
        <Card.Body
          css={{ alignItems: "center", p: "0", justifyContent: "flex-end" }}
        >
          <div className="blob-wrap">
            <Blob color={isActive ? "#fff" : "var(--nextui-colors-primary)"} />
          </div>
          <div className="icon-wrap">
            <CategoryLogo
              category={data.category}
              color={
                isActive
                  ? "var(--nextui-colors-categorieNavCardIsActive"
                  : "var(--nextui-colors-foreground)"
              }
            />
          </div>
        </Card.Body>
        <Card.Footer css={{ justifyContent: "center", p: "0" }}>
          <Text
            css={{
              fontSize: "14px",
              color: isActive ? "#fff" : "var(--nextui-colors-primary)",
            }}
          >
            {data.title}
          </Text>
        </Card.Footer>
      </Card>

      <style jsx>{`
        .card-wrap {
          height: 120px;
          width: 120px;
          margin: 0 auto;
        }
        .blob-wrap {
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-wrap {
          position: absolute;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media screen and (min-width: 450px) {
          .card-wrap {
            height: 270px;
            width: 270px;
          }
        }
        @media screen and (min-width: 960px) {
          .card-wrap {
            height: 150px;
            width: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default CategorieNavCard