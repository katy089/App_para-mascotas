import React from "react";
import { Box, Flex, Text, Image, Button, Divider } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import Paws from "../../assets/icons/paws.svg";
import Suitcase from "../../assets/icons/suitcase.svg";
import OutlinePaw from "../../assets/icons/outlinePaw.svg";
import OutlineCheckCircle from "../../assets/icons/outlineCheckCircle.svg";
import Certificate from "../../assets/icons/certificate.svg";
import PerfilCheck from "../../assets/icons/perfilCheck.svg";
import MagnifyingGlass from "../../assets/icons/magnifyingGlass.svg";
import DescriptionAbout from "../DescriptionAbout/DescriptionAbout";

export default function About({ iconAnimal, text, order, title, textButton }) {
  return (
    <div style={{ paddingTop: "70px" }} id="about">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        p={{ base: "80px 20px", md: "64px 100px" }}
        bg="white"
        pos="relative"
        gap={10}
      >
        <Image
          src={iconAnimal}
          alt="Imagen de animal"
          pos="absolute"
          top={
            order === 1
              ? { base: -80, lg: -64 }
              : { base: -24, md: -12, lg: -10 }
          }
          left={order === 1 ? 0 : undefined}
          right={order === 2 ? 0 : undefined}
        />
        <Box
          w={{ base: "100%", md: "50%" }}
          order={{ base: order === 1 ? 2 : undefined, md: order }}
          p={order === 1 ? "0px" : { base: "0px", md: "35px" }}
          pos="relative"
        >
          <Text
            w={
              order === 1
                ? {
                    base: "80vw",
                    md: "30vw",
                    lg: "32vw",
                    xl: "24vw",
                    "2xl": "18vw",
                  }
                : { base: "80vw", md: "30vw", xl: "24vw", "2xl": "18vw" }
            }
            color="azulacento.900"
            fontFamily="Poppins-SemiBold"
            fontWeight="600"
            fontSize="32px"
            lineHeight="42px"
          >
            {text}
          </Text>
          {/* <Button
            rightIcon={<GoArrowUpRight size="24px" />}
            bg="azulacento.500"
            color="#FFFF"
            fontFamily="Poppins-SemiBold"
            mt={5}
            _hover={{ bg: "azulacento.600" }}
          >
            {textButton}
          </Button> */}
          <Image
            src={Paws}
            alt="Patitas"
            display={{ base: "none", md: "block" }}
            pos="absolute"
            pt="10px"
            left={48}
          />
        </Box>
        <Flex
          w={{ base: "100%", md: "50%" }}
          justify="center"
          order={order === 1 ? 2 : undefined}
        >
          <Box
            w={{ base: "90vw", md: "40vw" }}
            bg="azulacento.100"
            p={8}
            borderRadius={20}
            gap={4}
          >
            <Text
              fontFamily="Poppins-Medium"
              fontSize="16px"
              fontWeight="500"
              lineHeight="24px"
              color="azulacento.500"
            >
              {title}
            </Text>
            <Divider
              borderWidth="1px"
              borderColor="azulacento.800"
              my="10px"
              opacity="20%"
              w="100%"
            />
            {order === 1 ? (
              <>
                <DescriptionAbout
                  icon={Suitcase}
                  title="Guardería"
                  text="Tu mascota pasa la noche en casa de su cuidador."
                />
                {/* <DescriptionAbout
                  icon={OutlinePaw}
                  title="Paseos"
                  text="Tu mascota sale a dar un paseo por tu barrio."
                /> */}
                <DescriptionAbout
                  icon={OutlineCheckCircle}
                  title="Seguro"
                  text="Contamos con un seguro que protege a tu perro durante su estancia y actividades."
                />
              </>
            ) : (
              <>
                <DescriptionAbout
                  icon={Certificate}
                  title="Entrenamiento y certificación"
                  text="En técnicas de manejo, primeros auxilios para mascotas y comportamiento animal."
                />
                {/* <DescriptionAbout
                  icon={PerfilCheck}
                  title="Perfiles completos y detallados"
                  text="Incluye información personal, experiencia y referencias."
                /> */}
                <DescriptionAbout
                  icon={MagnifyingGlass}
                  title="Revisión continua de desempeño"
                  text="Para garantizar que sigan cumpliendo con nuestros estándares de calidad."
                />
              </>
            )}
          </Box>
        </Flex>
      </Flex>
    </div>
  );
}
