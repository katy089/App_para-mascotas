import React from "react";
import { Image, Text } from "@chakra-ui/react";

export default function DescriptionAbout({ icon, title, text }) {
  return (
    <>
      <Image src={icon} alt="icon" my={2} />
      <Text
        fontFamily="Poppins-SemiBold"
        fontWeight="600"
        fontSize="18px"
        lineHeight="27px"
        color="azulacento.500"
        mb={2}
      >
        {title}
      </Text>
      <Text
        fontFamily="Poppins-Regular"
        fontWeight="400"
        fontSize="16px"
        lineHeight="24px"
        color="azulacento.500"
      >
        {text}
      </Text>
    </>
  );
}
