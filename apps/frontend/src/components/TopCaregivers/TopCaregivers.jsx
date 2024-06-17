import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Dog2 from "../../assets/img/Dog2.png";
import PawPurple from "../../assets/icons/PawPurple.svg";
import VectorTeam1 from "../../assets/icons/VectorTeam1.svg";
import VectorTeam2 from "../../assets/icons/VectorTeam2.svg";
import Caregiver1 from "../../assets/img/Caregiver1.png";
import Caregiver2 from "../../assets/img/Caregiver2.png";
import Caregiver3 from "../../assets/img/Caregiver3.png";

export default function TopCaregivers() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      bg="white"
      p="72px 100px 64px 100px"
      gap={10}
      pos="relative"
      mt={20}
    >
      <Image
        src={Dog2}
        alt="Imagen de perro salchicha"
        pos="absolute"
        top="-8.5rem"
        right={{ base: 0, md: 40, xl: 96, "2xl": "36rem" }}
      />
      <Box
        maxW={{ base: "280px", md: "500px" }}
        gap={4}
        textAlign="center"
        pos="relative"
      >
        <Heading
          as="h2"
          fontFamily="Poppins-SemiBold"
          fontSize="40px"
          fontWeight="600"
          lineHeight="60px"
        >
          Nuestros Cuidadores de{" "}
          <span style={{ color: "#5A4FCF", lineHeight: "60px" }}>SafePaws</span>
        </Heading>
        <Image
          src={PawPurple}
          alt="Icono de huellita violeta"
          pos="absolute"
          top={{ base: 24, md: 12 }}
          right={{ base: -6, md: 32 }}
        />
        <Text
          color="gris.800"
          px={{ base: 0, md: 32 }}
          fontFamily="Poppins-Medium"
          fontSize="16px"
          fontWeight="400"
          lineHeight="25px"
        >
          Cuidarán a tu mascota como parte de su familia.
        </Text>
      </Box>
      <Flex direction={{ base: "column", lg: "row" }} gap="27px">
        <Image src={Caregiver1} alt="Tarjeta de cuidadores destacados" />
        <Image src={Caregiver2} alt="Tarjeta de cuidadores destacados" />
        <Image src={Caregiver3} alt="Tarjeta de cuidadores destacados" />
      </Flex>
      <Image
        src={VectorTeam2}
        alt="icono"
        pos="absolute"
        top={{ base: 96, md: 48 }}
        right={0}
      />
      <Image src={VectorTeam1} alt="icono" pos="absolute" bottom={0} left={0} />
    </Flex>
  );
}
