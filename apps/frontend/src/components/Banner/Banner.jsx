import React from "react";
import { Box, Flex, Image, Text, Grid, Container } from "@chakra-ui/react";
import VectorBanner1 from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2 from "../../assets/icons/VectorBanner2.svg";
import imgBanner from "../../assets/img/ImgBanner.png";
import MiniCat from "../../assets/icons/MiniCat.svg";
import MiniDog from "../../assets/icons/MiniDog.svg";
import SearchingBar from "../SearchingBar/SearchingBar";

export default function Banner() {
  return (
    <Flex direction={{ base: "column", lg: "row" }} id="banner">
      <Box
        id="home"
        bg="white"
        w={{ base: "100vw", lg: "50%" }}
        minH={{ base: "50vh", lg: "100vh" }}
      >
        <Grid
          w="367.62px"
          pos={{
            base: "relative",
            xl: "absolute",
          }}
          top={{base: 32, lg: 24}}
          left={{ base: "20px", md: "100px" }}
          gap="36px"
        >
          <Image
            src={MiniCat}
            alt="icono mini gato"
            pos="absolute"
            top={{ base: "-80px", lg: "-10px" }}
            left={10}
          />
          <Image
            src={MiniDog}
            alt="icono mini perro"
            pos="absolute"
            top={{ base: "100px", lg: "170px" }}
            left={52}
          />
          <Box w="400px">
            <Text
              fontFamily="Mercuria"
              fontWeight="400"
              fontSize="46px"
              lineHeight="60px"
              pt={{ base: 0, lg: 20 }}
            >
              CUIDAMOS A TU MEJOR AMIGO PELUDO
            </Text>
            <Text
              color="gris.800"
              fontFamily="Poppins-Regular"
              fontWeight="500"
              fontSize="20px"
              lineHeight="30px"
              mt={2}
            >
              Encuentra los mejores cuidadores de mascotas de Buenos Aires
            </Text>
          </Box>
          <SearchingBar />
        </Grid>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }} h="100vh" pos="relative">
        <Image src={imgBanner} alt="image Banner" h="100%" w="100%" />
        <Image
          src={VectorBanner1}
          alt="icon mini cat"
          pos="absolute"
          top={{ base: -16, lg: 20 }}
          left={{ base: -2, lg: -16 }}
        />
        <Image
          src={VectorBanner2}
          alt="icon mini dog"
          pos="absolute"
          top={{
            base: -12,
            lg: "60vh",
          }}
          left={{
            base: undefined,
            lg: -12,
          }}
          right={{ base: 0, lg: undefined }}
        />
      </Box>
    </Flex>
  );
}
