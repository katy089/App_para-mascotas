import { Box, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function ProcessFunctioning({ image, title, description }) {
  return (
    <Box w="259px">
      <Image src={image} alt="Imagen de perrito" />
      <Box gap="5px">
        <Heading
          color="verdeacento.800"
          size="16px"
          fontWeight="600"
          lineHeight="24px"
        >
          {title}
        </Heading>
        <Text
          color="gris.600"
          fontFamily="Poppins-Regular"
          size="14px"
          fontWeight="400"
          lineHeight="21px"
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
}
