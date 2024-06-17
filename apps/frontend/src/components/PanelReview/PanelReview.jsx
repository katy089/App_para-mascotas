import React from "react";
import { Image, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import Guy__Review from "../../assets/img/Guy_Review.png";
import Kayla__Review from "../../assets/img/Kayla_Review.png";
import Eva__Review from "../../assets/img/Eva_Review.png";
import Rebeca__Review from "../../assets/img/Rebeca_Review.png";
import Manito from "../../assets/img/Manitos.png";
import { IoIosStar } from "react-icons/io";

export default function PanelReview() {
  return (
    <>
      <Flex justify="space-between">
        <Heading
          fontFamily="Poppins-SemiBold"
          fontSize="24px"
          color="black"
          mb="32px"
        >
          Valoración
        </Heading>
        <Flex pt="4px" gap="4px">
          <IoIosStar size="20px" color="#FFC058" alt="Icono de estrella" />
          <Text
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            color="gris.600"
          >
            5.0
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} justify="space-between" mb="40px">
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
        <Box mb="40px">
        <Button
          p="10px 20px"
          colorScheme="purple"
          variant="outline"
          fontFamily="Poppins-Regular"
          fontSize="16px"
          border="2px"
          borderRadius="10px"
        >
          Ver todas
        </Button>
      </Box>
      </Flex>
    </>
  );
}
