import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Guy__Review from "../../assets/img/Guy_Review.png";
import Kayla__Review from "../../assets/img/Kayla_Review.png";
import Eva__Review from "../../assets/img/Eva_Review.png";
import Rebeca__Review from "../../assets/img/Rebeca_Review.png";
import Manito_violeta_Review from "../../assets/img/manito_violeta.png";
import Manito from "../../assets/img/Manitos.png";
import VectorBanner1_Review from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2_Review from "../../assets/icons/VectorBanner2.svg";

const Review = () => {
  return (
    <Flex
      p="0px 150px 64px 150px"
      gap="40px"
      textAlign="center"
      justify="center"
      align="center"
      direction="column"
    >
      <Image
        src={Manito_violeta_Review}
        alt="manito"
        position="relative"
        left="150px"
        top="70px"
      ></Image>
      <Text
        as="h2"
        w="400px"
        fontSize="40px"
        fontWeight="600"
        lineHeight="60px"
        fontFamily="Poppins-SemiBold"
      >
       Qué opinan nuestros clientes
        
      </Text>
     

      <Flex
        direction={"column"}
        justify="space-between"
        align="center"
        p="0px 90px"
        pos="relative"
      >
        <Image
          src={VectorBanner2_Review}
          alt="VectorBanner2"
          position="absolute"
          right={{ base: 0 }}
          top={{ base: 0, md: -6 }}
          transform="scaleX(-1)"
        ></Image>
        <Image
          src={VectorBanner1_Review}
          alt="VectorBanner1"
          position="absolute"
          right={{ base: 0 }}
          bottom={{ base: 0 }}
        ></Image>
        <Flex direction={{ base: "column", md: "row" }} gap="16px">
          <Box padding="24px 21px">
            <Box
              color="gris.700"
              fontSize="14px"
              w="217px"
              fontFamily="Poppins-SemiBold"
            >
              <Image src={Guy__Review} alt="guy_foto"></Image>
              <Image
                src={Manito}
                alt="manito"
                pos="relative"
                left="164px"
                bottom="40px"
              ></Image>{" "}
              <Text
                fontFamily="Poppins-Regular"
                fontSize="14px"
                fontWeight="400"
                lineHeight="21px"
                textAlign="start"
              >
                Estaba un poco nerviosa de dejarlas, pero ella me escuchó sobre
                el cuidado de las perritas, y les puso música para que se
                acoplaran.
              </Text>
            </Box>
          </Box>
          <Box gap="16px" padding="24px 21px">
            <Box>
              <Box
                color="gris.700"
                fontFamily="Poppins-SemiBold"
                w="217px"
                fontSize="14px"
              >
                <Image src={Eva__Review} alt="eva_foto"></Image>
                <Image
                  src={Manito}
                  alt="manito"
                  pos="relative"
                  left="164px"
                  bottom="40px"
                ></Image>
                <Text
                  fontFamily="Poppins-Regular"
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="21px"
                  textAlign="start"
                >
                  Su compromiso con el bienestar de mi mascota es evidente en
                  cada interacción.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} gap="16px">
          <Box gap="16px" padding="24px 21px">
            <Box
              color="gris.700"
              fontFamily="Poppins-SemiBold"
              w="217px"
              fontSize="14px"
            >
              <Image src={Kayla__Review} alt="kayla_foto"></Image>
              <Image
                src={Manito}
                alt="manito"
                pos="relative"
                left="164px"
                bottom="40px"
              ></Image>
              <Text
                fontFamily="Poppins-Regular"
                fontSize="14px"
                fontWeight="400"
                lineHeight="21px"
                textAlign="start"
              >
                Su atención dedicada y amor por los peludos lo convierten en el
                mejor amigo de mi mascota durante mis ausencias.
              </Text>
            </Box>
          </Box>
          <Box gap="16px" padding="24px 21px">
            <Box
              color="gris.700"
              fontFamily="Poppins-SemiBold"
              w="217px"
              fontSize="14px"
            >
              <Image src={Rebeca__Review} alt="rebeca_foto"></Image>
              <Image
                src={Manito}
                alt="manito"
                pos="relative"
                left="164px"
                bottom="40px"
              ></Image>
              <Text
                fontFamily="Poppins-Regular"
                fontSize="14px"
                fontWeight="400"
                lineHeight="21px"
                textAlign="start"
              >
                Su calma y habilidades para el manejo de mascotas resalta su
                pasión y confianza.
              </Text>
            </Box>
          </Box>
        </Flex>
        <Image
          src={VectorBanner1_Review}
          alt="VectorBanner1"
          position="absolute"
          left={{ base: 0, md: 4 }}
          top={{ base: 0, md: -32 }}
          transform="scaleX(-1)"
        ></Image>
        <Image
          src={VectorBanner2_Review}
          alt="VectorBanner2"
          position="absolute"
          left={{ base: 0, md: 8 }}
          bottom={{ base: 0, md: -10 }}
        ></Image>
      </Flex>
    </Flex>
  );
};

export default Review;
