import React from "react";
import { Image, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import HomeIcon from "../../assets/icons/Home.svg";
import IconDogPurple from "../../assets/icons/IconDogPurple.svg";
import IconCatPurple from "../../assets/icons/IconCatPurple.svg";
import IconPetSizes from "../../assets/icons/PetsSizes.svg";
import IconItem from "../../assets/icons/ItemDetails.svg";

export default function PanelServicesAndRates({ catAccepted, dogAccepted, rates }) {
  return (
    <>
      <Heading
        fontFamily="Poppins-SemiBold"
        fontSize="24px"
        color="black"
        mb="40px"
      >
        Servicios y Tarifas
      </Heading>
      <Flex justify="space-between" mb="40px">
        <Flex>
          <Image src={HomeIcon} mr="14px" />
          <Box>
            <Heading
              fontFamily="Poppins-Regular"
              fontSize="18px"
              color="gris.800"
            >
              Guardería
            </Heading>
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Durante el día en casa del cuidador
            </Text>
          </Box>
        </Flex>
        <Box>
          <Heading
            fontFamily="Poppins-SemiBold"
            fontSize="18px"
            color="gris.800"
          >
            ${rates}
          </Heading>
          <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
            día
          </Text>
        </Box>
      </Flex>
      <Flex gap="130px" mb="40px">
        <Box>
          <Heading
            fontFamily="Poppins-SemiBold"
            fontSize="14px"
            color="gris.800"
            mb="16px"
          >
            Puede hospedas
          </Heading>
          <Flex gap="12px">
            {catAccepted ? (
              <Flex direction="column" justify="center" alignItems="center">
                <Image src={IconCatPurple} alt="Icono de gato" boxSize="32px" />
                <Text
                  fontFamily="Poppins-Regular"
                  fontSize="14px"
                  color="gris.600"
                >
                  Gatos
                </Text>
              </Flex>
            ) : null}
            {dogAccepted ? (
              <Flex direction="column" justify="center" alignItems="center">
                <Image
                  src={IconDogPurple}
                  alt="Icono de perro"
                  boxSize="32px"
                />
                <Text
                  fontFamily="Poppins-Regular"
                  fontSize="14px"
                  color="gris.600"
                >
                  Perros
                </Text>
              </Flex>
            ) : null}
          </Flex>
        </Box>
        <Box>
          <Heading
            fontFamily="Poppins-SemiBold"
            fontSize="14px"
            color="gris.800"
            mb="16px"
          >
            Tamaños
          </Heading>
          <Image
            src={IconPetSizes}
            alt="Icono de diferentes tamaños de perros"
          />
        </Box>
      </Flex>
      <Box mb="40px">
        <Heading
          fontFamily="Poppins-SemiBold"
          fontSize="14px"
          color="gris.800"
          mb="16px"
        >
          Requisitos Esenciales
        </Heading>
        <Flex direction="column" gap="8px">
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Animal castrado o esterilizado
            </Text>
          </Flex>
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Animal amigable
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box mb="40px">
        <Heading
          fontFamily="Poppins-SemiBold"
          fontSize="14px"
          color="gris.800"
          mb="16px"
        >
          Servicios básicos SafePaws
        </Heading>
        <Flex direction="column" gap="8px">
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Actualización en tiempo real
            </Text>
          </Flex>
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Aperitivos
            </Text>
          </Flex>
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Reportes
            </Text>
          </Flex>
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Seguro paws
            </Text>
          </Flex>
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Pago en efectivo
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box mb="40px">
        <Heading
          fontFamily="Poppins-SemiBold"
          fontSize="14px"
          color="gris.800"
          mb="16px"
        >
          Servicios extras
        </Heading>
        <Flex direction="column" gap="8px">
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Veterinario
            </Text>
          </Flex>
        </Flex>
      </Box>
      {/* <Box mb="40px">
        <Heading
          fontFamily="Poppins-SemiBold"
          fontSize="14px"
          color="gris.800"
          mb="16px"
        >
          El sitio
        </Heading>
        <Flex direction="column" gap="8px">
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Undefined
            </Text>
          </Flex>
        </Flex>
      </Box> */}
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
          Política de servicio y tarifa
        </Button>
      </Box>
      <Box mb="40px">
        <Heading
          fontFamily="Poppins-SemiBold"
          fontSize="14px"
          color="gris.800"
          mb="16px"
        >
          Experiencia y habilidades
        </Heading>
        <Flex direction="column" gap="8px">
          <Flex gap="8px">
            <Image src={IconItem} />
            <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
              Tengo experiencia previa alojando perros en casa
            </Text>
          </Flex>
        </Flex>
      </Box>
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
          Certificado de cuidador
        </Button>
      </Box>
    </>
  );
}
