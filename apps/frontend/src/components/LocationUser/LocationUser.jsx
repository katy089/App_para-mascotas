import React from "react";
import { Flex, Text, Image, Divider } from "@chakra-ui/react";
import iconCiudadUbicacion from "../../assets/icons/Group.svg";
import mapa from "../../assets/img/Mapa.png";

const Location = () => {
  return (
    <Flex 
     w="543px"
     h="438px"
     
    direction="column"
    marginTop="25px"
    >
      <Text
        as="h1"
        w="123px"
        h="36px"
        fontWeight={600}
        fontSize="24px"
        lineHeight="36px"
        fontFamily="Poppins-Regular"
        
      >
        Ubicación
      </Text>
      <Flex mb="19px"
        mt="19px"
      >
     
        <Image src={iconCiudadUbicacion} alt="ciudad" w="20px" h="20px"></Image>
        <Text
          w="155px"
          h="24px"
          fontWeight={400}
          fontSize="14px"
          lineHeight="24px"
          marginLeft="5px"
          fontFamily="Poppins-Regular"
        >
          {" "}
          Palermo, Buenos Aires
        </Text>
      </Flex>
      
        <Image 
         w="543px"
         h="310px"
         borderRadius="12px"
        src={mapa} alt="mapa"></Image>
        <Divider
          border="1px"
         color="gris.300"
         mt="20px"
        />
      
    </Flex>
  );
};

export default Location;
