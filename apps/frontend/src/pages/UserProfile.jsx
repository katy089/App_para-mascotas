import * as React from "react";
import {
  Button,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useDisclosure,
  Image,
  Divider,
} from "@chakra-ui/react";
import { UserContext } from "../utils/context/UserContext";
import PetCard from "../components/PetCard/PetCard";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import { Navigate } from "react-router-dom";
import ModalAddPet from "../components/ModalAddPet/ModalAddPet";
import UserInformation from "../components/UserInformation/UserInformation";
import Location from "../components/LocationUser/LocationUser";

import FotoPerfil from "../../src/assets/img/Foto_Perfil.png";

const UserProfile = () => {
  const { user, setUser } = React.useContext(UserContext);
  /*Agregar parametros desde el Modal de mascotas */
  const { isOpen, onOpen, onClose } = useDisclosure();
  /*Agregar funcion en el ModalAddPet*/
  const addPet = () => {
    const newPet = { id: user.pets.length + 1, type: "cat", name: "rober" };
    //agregar a pets al array de user
    const pets = [...user.pets, newPet];
    //Sobreescribir pets sin perder datos previos de user
    const addUserPet = { ...user, pets };
    setUser(addUserPet);
  };
  const deletePet = (id) => {
    const pets = user.pets.filter((item) => item.id !== id);
    const delUserPet = { ...user, pets };
    setUser(delUserPet);
  };
  /*-------------------------------*/

  // const deleteReservation = (id) => {
  //   const reservations = user.reservations.filter(
  //     (reservation) => reservation.id !== id
  //   );
  //   const delUserReservetion = { ...user, reservations };
  //   setUser(delUserReservetion);
  // };

  //Si no esta iniciada la sesion return a home
  if (!user.status) return <Navigate to={"/"} />;

  return (
    <Box mx={{ base: "20px", md: "100px" }} pt={"80px"} minH={"1600px"}>
      <Image src={FotoPerfil} alt="imagen" w="225px" h="240px"></Image>
      <Flex direction={"column"} marginLeft="240px" marginTop="-222px">
        <Text
          as="h2"
          color="#000000"
          fontSize="30px"
          fontFamily="Poppins-SemiBold"
        >
          Mis datos
        </Text>
        <Text fontFamily="Poppins-Regular" fontSize="18px">
          Nombre: {user.name}
        </Text>
        <Text fontFamily="Poppins-Regular" fontSize="18px">
          Correo: {user.email}
        </Text>

        <Flex mb="19px" mt="7px">
          {user.pets.map((pet) => (
            <PetCard
              id={pet.id}
              name={pet.name}
              type={pet.type}
              key={pet.id}
              onClick={() => deletePet(pet.id)}
            />
          ))}
        </Flex>
        <Flex marginTop="12px">
          <ModalAddPet isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Flex>
      </Flex>
      <Divider border="1px" color="gris.300" mt="30px" />
      {/*
      formulario de datos y mascotas posicionado en la parte inferior
    */}
      {/*
    <Text
        as="h2"
        color="#000000"
        fontSize="30px"
        fontFamily="Poppins-SemiBold"
      >
        Mis datos
      </Text>
      
      <Text fontFamily="Poppins-Regular" fontSize="18px">
        Nombre: {user.name}
      </Text>
      <Text fontFamily="Poppins-Regular" fontSize="18px">
        Correo: {user.email}
      </Text>
      {/* {JSON.stringify(user)} */}
      {/*
      Mostrar Nombre user.name
      Mostrar user.correo
    */}

      <Flex
        direction="column"
        gap={"10px"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {/*
        {user.pets.map((pet) => (
          <PetCard
            id={pet.id}
            name={pet.name}
            type={pet.type}
            key={pet.id}
            onClick={() => deletePet(pet.id)}
          />
        ))}
      */}
        {/*  
        <Box>
           <ModalAddPet isOpen={isOpen} onOpen={onOpen} onClose={onClose} />   
        </Box>
        */}
        <Location />
      </Flex>

      {/* <Heading>Mis Reservas</Heading> */}
      {/* Lista de mascota y poder agregar y sacar */}
      {/* Lista de reservas, solo quitar */}
      {/* <Flex direction={"column"}>
        {user.reservations.map((reser) => (
          <ReservationCard
            careName={reser.careName}
            date={reser.date}
            mypet={reser.mypet}
            key={reser.id}
            onClick={() => deleteReservation(reser.id)}
          />
        ))}
      </Flex> */}
    </Box>
  );
};

export default UserProfile;
