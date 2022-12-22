import React from 'react'
import { Grid, Text } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";


const FooterItem = (props: {title: string, text: string[]}) => {
    
  return (
    <Grid.Container
      gap={0}
      justify="center"
      direction="column"
      alignItems="center"
    //   css={{ marginBottom: "36px" }}
    >
      <Grid>
        <Text color="primary" size="$xs">
          {props.title}
        </Text>
      </Grid>
      {props.text.map((text) => (
        <Grid key={uuidv4()}>
          <Text size="$xs">{text}</Text>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default FooterItem