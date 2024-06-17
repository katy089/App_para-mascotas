import React from "react";
import { Image, Flex, Box, Heading, Text } from "@chakra-ui/react";
import Calendar from "../../assets/icons/Calendar.svg";
import IconTime from "../../assets/icons/TimeLine.svg";

export default function PanelAvailability() {
  return (
    <>
      <Heading
        fontFamily="Poppins-SemiBold"
        fontSize="24px"
        color="black"
        mb="40px"
      >
        Disponibilidad
      </Heading>
      <Flex gap="100px" mb="40px">
        <Flex gap="14px">
          <Image src={Calendar} alt="Icono de calendario" />
          <Box w="100%">
            <Text fontFamily="Poppins-Medium" fontSize="18px" color="gris.800">
              Semana
            </Text>
            <Text
              fontFamily="Poppins-Regular"
              fontSize="14px"
              color="azulacento.500"
            >
              Lunes - Viernes
            </Text>
          </Box>
        </Flex>
        <Flex gap="14px">
          <Image src={IconTime} alt="Icono de reloj" />
          <Box>
            <Text fontFamily="Poppins-Medium" fontSize="18px" color="gris.800">
              Horario
            </Text>
            <Text
              fontFamily="Poppins-Regular"
              fontSize="14px"
              color="azulacento.500"
            >
              8 - 12 | 15 - 19
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex gap="75px" mb="40px">
        <Flex gap="14px">
          <Image src={Calendar} alt="Icono de calendario" />
          <Box w="100%">
            <Text fontFamily="Poppins-Medium" fontSize="18px" color="gris.800">
              Fin de semana
            </Text>
            <Text
              fontFamily="Poppins-Regular"
              fontSize="14px"
              color="azulacento.500"
            >
              Sábado
            </Text>
          </Box>
        </Flex>
        <Flex gap="14px">
          <Image src={IconTime} alt="Icono de reloj" />
          <Box>
            <Text fontFamily="Poppins-Medium" fontSize="18px" color="gris.800">
              Horario
            </Text>
            <Text
              fontFamily="Poppins-Regular"
              fontSize="14px"
              color="azulacento.500"
            >
              8 - 12
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
