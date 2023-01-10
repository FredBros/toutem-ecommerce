import React from 'react'
import { Card, Text, Col } from "@nextui-org/react";
import { BlogPost } from "../../@types/data";
import { urlFor } from "../../lib/client";

type Props={
post: BlogPost
}


const BlogPostCard = ({post}: Props) => {
    const slicedText = (text: string | undefined) => {
      if (!text) return null;
      if (text.length < 100) return text;
      return text.slice(0, 100) + "...";
    };

  return (
    <Card isPressable isHoverable css={{ height: "100%" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          // @ts-ignore
          src={urlFor(post.image)}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={post.title}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Col>
          <Text weight="bold" color="primary">
            {post.title}
          </Text>
          <Card.Divider />
          <Text size="$xs">{slicedText(post.text)}</Text>
        </Col>
      </Card.Footer>
    </Card>
  );
}

export default BlogPostCard