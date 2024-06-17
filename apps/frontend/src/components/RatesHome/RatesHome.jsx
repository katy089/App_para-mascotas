import React from "react";
import { Box, Text, Card, Button, Flex, HStack, Image } from "@chakra-ui/react";
import Dog from "../../assets/img/Dog_Rates.png";
import Manito_violeta from "../../assets/img/manito_violeta.png";
import VectorBanner1 from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2 from "../../assets/icons/VectorBanner2.svg";
import Shadow from "../../assets/img/Shadow.png";

const RatesHome = () => {
  return (
    <Box pt={16} id="rates">
      <Box mb={20} pos="relative">
        <Image
          src={Dog}
          alt="Dog_rates"
          pos="absolute"
          top={{ base: -80, md: -48 }}
          left="0"
        />
        <Box w="349px" margin="auto" textAlign="center" marginBottom="40px">
          <Image
            src={Manito_violeta}
            alt="manito"
            position="relative"
            left="248px"
            top="25px"
          ></Image>
          <Text
            as="h2"
            color="#000000"
            fontSize="40px"
            fontFamily="Poppins-SemiBold"
          >
            Tarifas
          </Text>
          <Text
            color="gris.800"
            fontFamily="Poppins-Medium"
            fontSize="16px"
            fontWeight="400"
            lineHeight="25px"
          >
            Nuestras tarifas asequibles para el cuidado de tus mascotas
          </Text>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={5}
          justify="center"
          align="center"
        >
          <Image src={Shadow} pos="absolute" top={16} zIndex={0} />
          <Card
            w="295px"
            borderRadius="20px"
            padding="48px 32px"
            textAlign="center"
            gap="32px"
            pos="relative"
            zIndex={1}
          >
            <Image
              src={VectorBanner1}
              alt="icono verde"
              pos="absolute"
              top={-10}
              right={-12}
            ></Image>
            <Image
              src={VectorBanner2}
              alt="icono verde"
              pos="absolute"
              bottom={-6}
              left="-3.4rem"
            ></Image>
            <Text
              color="azulacento.800"
              fontSize="20px"
              fontFamily="Poppins-SemiBold"
            >
              Guardería
            </Text>
            <HStack>
              <Text
                color="azulacento.500"
                fontFamily="Poppins-Regular"
                fontSize="18px"
                fontWeight="500"
                lineHeight="27px"
              >
                $
              </Text>
              <Text
                color="azulacento.500"
                fontSize="40px"
                fontFamily="Poppins-SemiBold"
                fontWeight="500"
                lineHeight="60px"
              >
                {" "}
                7000
              </Text>
              <Text fontSize="40px" color="gris.500">
                /
              </Text>
              <Text
                fontFamily="Poppins-Regular"
                color="gris.700"
                fontSize="14px"
                lineHeight="21px"
              >
                {" "}
                por día
              </Text>
            </HStack>
            <Box gap="14px">
              <Text
                color="gris.600"
                fontFamily="Poppins-Regular"
                fontWeight="500"
                fontSize="16px"
                lineHeight="24px"
              >
                Actualización en tiempo real
              </Text>
              <Text
                color="gris.600"
                fontFamily="Poppins-Regular"
                fontWeight="500"
                fontSize="16px"
                lineHeight="24px"
                mt={3}
              >
                Aperitivos
              </Text>
              <Text
                color="gris.600"
                fontFamily="Poppins-Regular"
                fontWeight="500"
                fontSize="16px"
                lineHeight="24px"
                mt={3}
              >
                Reportes
              </Text>
              <Text
                color="gris.600"
                fontFamily="Poppins-Regular"
                fontWeight="500"
                fontSize="16px"
                lineHeight="24px"
                mt={3}
              >
                Seguro Paws
              </Text>
              <Text
                color="gris.600"
                mt={3}
                fontFamily="Poppins-Regular"
                fontWeight="500"
                fontSize="16px"
                lineHeight="24px"
              >
                Pago en efectivo
              </Text>
            </Box>
            {/* <Box>
              <Button
                w="100%"
                bg="azulacento.500"
                color="#FFFFFF"
                fontFamily="Poppins-Regular"
                _hover={{ bg: "azulacento.600" }}
              >
                Más info.
              </Button>
            </Box> */}
          </Card>
        </Flex>
      </Box>
    </Box>
  );
};

export default RatesHome;
