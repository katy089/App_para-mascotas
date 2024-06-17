import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import ImgMei from "../../assets/img/ImgMei.png";
import IconLocation from "../../assets/icons/IconLocation.svg";
import { IoIosStar } from "react-icons/io";
import IconDialogueBubbles from "../../assets/icons/IconDialogueBubbles.svg";
import { LuClock3 } from "react-icons/lu";
import IconDogPurple from "../../assets/icons/IconDogPurple.svg";
import IconCatPurple from "../../assets/icons/IconCatPurple.svg";
import { UserContext } from "../../utils/context/UserContext";
import * as React from "react";
import ModalUser from "../ModalUser/ModalUser";
import ModalReservations from "../ModalReservations/ModalReservations";
import { useNavigate } from "react-router-dom";

export default function CaregiverCard({
  id,
  name,
  photo,
  currentDate,
  onAddReservation,
}) {
  // coment
  // console.log("CareCarddate: ", currentDate1);
  const { user } = React.useContext(UserContext);
  const {
    isOpen: isUserOpen,
    onOpen: onUserOpen,
    onClose: onUserClose,
  } = useDisclosure();
  const {
    isOpen: isReservationOpen,
    onOpen: onReservationOpen,
    onClose: onReservationClose,
  } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <ModalUser
        isOpen={isUserOpen}
        onOpen={onUserOpen}
        onClose={onUserClose}
      />
      <ModalReservations
        sitterID={id}
        petstartDateID={currentDate}
        isOpen={isReservationOpen}
        onOpen={onReservationOpen}
        onClose={onReservationClose}
      />
      <Flex
        justify="space-between"
        align="center"
        margin={"20px auto"}
        gap="18px"
      >
        <Box>
          <Image src={photo} alt="Iamgen del cuidador" borderRadius="8px" />
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="24px"
            bg="azulacento.100"
            color="azulacento.500"
            borderRadius="8px"
            textAlign="center"
            mt={1}
          >
            Vacante
          </Text>
        </Box>
        <Grid gap={1}>
          <Heading
            as="h4"
            fontFamily="Poppins-Medium"
            fontSize="20px"
            fontWeight="600"
            lineHeight="30px"
            color="gris.800"
          >
            {name}
          </Heading>
          <Text
            fontSize="14px"
            fontWeight="400"
            lineHeight="24px"
            color="gris.800"
          >
            Lo cuidamos como si fuera nuestro ❤️
          </Text>
          <Flex gap={2}>
            <Image src={IconLocation} alt="Icono de ubicación" />
            <Text
              fontSize="14px"
              fontWeight="400"
              lineHeight="24px"
              color="gris.600"
            >
              Palermo, Buenos Aires
            </Text>
          </Flex>
          <Button
            colorScheme="azulacento"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "auto" });
              navigate(`/details/${id}`);
            }}
          >
            Detalles
          </Button>
          {/* <Box gap={3}>
          <Flex gap={4} align="center">
            <IoIosStar size="20px" color="#FFC058" alt="Icono de estrella" />
            <Text
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              color="gris.600"
            >
              5.0
            </Text>
            <Text fontSize="10px" color="gris.800">
              ●
            </Text>
            <Image src={IconDialogueBubbles} alt="Icono de globo de diálogo" />
            <Text
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              color="gris.600"
            >
              50 reseñas
            </Text>
          </Flex>
        </Box> */}
          {/* <Flex p="2px 0px" gap={4} align="center" color="azulacento.500">
          <LuClock3 size="20px" alt="Icono de reloj" />
          <Text fontWeight="400" fontSize="14px" lineHeight="24px">
            8 - 12 | 15 - 19
          </Text>
          <Text fontSize="10px" color="gris.800">
            ●
          </Text>
          <Flex gap="6px">
            <Image src={IconCatPurple} alt="Icono de gato violeta" />
            <Image src={IconDogPurple} alt="Icono de perro violeta" />
          </Flex>
        </Flex> */}
        </Grid>
        <Flex direction="column" gap={10}>
          <Grid>
            <Text
              fontFamily="Poppins-Medium"
              fontSize="20px"
              fontWeight="600"
              lineHeight="24px"
              color="azulacento.500"
            >
              $7000
            </Text>
            <span
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "gris.700",
              }}
            >
              por día
            </span>
            {/* {user.status ? ( */}
          </Grid>
          <Button
            colorScheme={"azulacento"}
            onClick={user.status ? onReservationOpen : onUserOpen}
          >
            Reservar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
