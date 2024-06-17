import React from "react";
import { Card, Flex, Text, Image, Divider,Link } from "@chakra-ui/react";
import imgMei from "../../assets/img/ImgMei.png";
import disponibilidad from "../../assets/img/Disponibilidad.png";
import valoracion from "../../assets/icons/Valoración.svg";
import iconCiudad from "../../assets/icons/Group.svg";
import iconReserva from "../../assets/icons/cil_calendar-check.svg";
import iconReseña from "../../assets/icons/material-symbols-light_reviews-outline-sharp.svg";

const UserInformation = () => {
  return (
    <>
    <Flex bg="#FAFAFA">
      <Image src={imgMei} alt="imagen" w="225px" h="240px"></Image>
      <Flex direction={"column"} marginLeft="20px">
        <Text
          h="21px"
          fontWeight={400}
          fontSize="14px"
          lineHeight="14px"
          marginBottom="5px"
          fontFamily="Poppins-Regular"
          color="verdeacento.800"
        >
          Paseador
        </Text>
        <Text
          w="47px"
          h="39px"
          fontWeight={600}
          fontSize="26px"
          lineHeight="39px"
          fontFamily="Poppins-Regular"
        >
          Mei
        </Text>
        <Image
          src={disponibilidad}
          alt="disponibilidad"
          w="79px"
          h="24px"
          marginBottom="11px"
        ></Image>

        <Image
          src={valoracion}
          alt="valoracion"
          w="48px"
          h="24px"
          marginBottom="5px"
        ></Image>
        <Flex marginBottom="19px">
          <Image src={iconCiudad} alt="ciudad" w="20px" h="20px"></Image>
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
        <Flex marginBottom="19px">
          <Image src={iconReserva} alt="reserva" w="20px" h="20px"></Image>
          <Text
            w="98px"
            h="24px"
            fontWeight={400}
            fontSize="16px"
            lineHeight="24px"
            marginLeft="5px"
            fontFamily="Poppins-Regular"
          >
            100 reservas
          </Text>
        </Flex>
        <Flex marginBottom="19px">
          <Image src={iconReseña} alt="reseña" w="20px" h="20px"></Image>
          <Text
            w="92px"
            h="24px"
            fontWeight={400}
            fontSize="16px"
            lineHeight="24px"
            marginLeft="5px"
            fontFamily="Poppins-Regular"
          >
            50 reseñas
          </Text>
        </Flex>
      </Flex>  
    </Flex>
    </>
  );
};

export default UserInformation;
