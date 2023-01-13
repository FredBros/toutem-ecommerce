import React from "react";
import { Card } from "@nextui-org/react";
import { urlFor } from "../../lib/client";
import Image from "next/image";

type Props = {
  image: {} | undefined;
};
const ImageProduct = ({ image }: Props) => {
  let src: string;
  if (image) src = urlFor(image).url();
  else src = "";

  return (
    <Card
      variant="bordered"
      css={{
        h: "100%",
        w: "100%",
        borderRadius: "0 var(--nextui-radii-xl)",
      }}
    >
      <Card.Body>
        <Image src={src} alt="Picture product" fill object-fit="cover" sizes="300px"
    />
      </Card.Body>
    </Card>
  );
};

export default ImageProduct;
