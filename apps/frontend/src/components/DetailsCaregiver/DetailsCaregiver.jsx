import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCareGivers } from "../../utils/api/CareGivers/CareGivers";
import {
  Box,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoIosStar } from "react-icons/io";
import IconLocation from "../../assets/icons/IconLocation.svg";
import TabsDetailsCaregiver from "../TabsDetailsCaregiver/TabsDetailsCaregiver";
import AccordionDetailsCaregiver from "../AccordionDetailsCaregiver/AccordionDetailsCaregiver";

export default function DetailsCaregiver() {
  const { idCaregiver } = useParams();
  const screenSize = useBreakpointValue({ base: "base", md: "md" });
  const { data, error, isLoading } = useQuery({
    queryKey: ["caregivers"],
    queryFn: getCareGivers,
  });

  if (isLoading) {
    return (
      <Flex justify="center" pt={20} minH="100vh">
        <Spinner size="lg" color="azulacento.600" />
      </Flex>
    );
  }

  if (error) {
    return <div>Error al obtener los cuidadores: {error.message}</div>;
  }

  const caregiver = data.data.find((item) => item.idCuidador === idCaregiver);

  if (!caregiver) {
    return <div>Cuidador no encontrado</div>;
  }

  return (
    <Flex
      direction="column"
      pt={20}
      minH="100vh"
      mx={{ base: "20px", md: "100px" }}
    >
      <Flex gap={6} py={10}>
        <Image src={caregiver.photo} boxSize="180px" borderRadius="8px" />
        <Flex direction="column" gap={2}>
          <Text
            fontFamily="Poppins-Regular"
            fontStyle="italic"
            color="verdeacento.800"
            fontSize="14px"
          >
            Guardería
          </Text>
          <Heading fontFamily="Poppins-Medium" fontSize="26px" color="gris.800">
            {caregiver.name}
          </Heading>
          <Box>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="24px"
              bg="azulacento.100"
              color="azulacento.500"
              borderRadius="8px"
              textAlign="center"
              mt={1}
              p="2px 8px"
              display="inline-block"
            >
              Vacante
            </Text>
          </Box>
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
          <Flex gap={2}>
            <Image src={IconLocation} alt="Icono de ubicación" />
            <Text
              fontFamily="Poppins-Regular"
              fontSize="14px"
              fontWeight="400"
              lineHeight="24px"
              color="gris.600"
            >
              {caregiver.approximateLocation.city}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {screenSize === "base" ? (
        <AccordionDetailsCaregiver
          name={caregiver.name}
          aboutMe={caregiver.aboutMe.aboutMe}
          catAccepted={caregiver.petAccepted.cats}
          dogAccepted={caregiver.petAccepted.dogs}
          city={caregiver.approximateLocation.city}
          approximateLatitude={caregiver.approximateLocation.geopoint._latitude}
          approximateLongitude={caregiver.approximateLocation.geopoint._longitude}
          rates={caregiver.rates.housing}
        />
      ) : (
        <TabsDetailsCaregiver
          name={caregiver.name}
          aboutMe={caregiver.aboutMe.aboutMe}
          catAccepted={caregiver.petAccepted.cats}
          dogAccepted={caregiver.petAccepted.dogs}
          city={caregiver.approximateLocation.city}
          approximateLatitude={caregiver.approximateLocation.geopoint._latitude}
          approximateLongitude={caregiver.approximateLocation.geopoint._longitude}
          rates={caregiver.rates.housing}
        />
      )}
    </Flex>
  );
}
