import { Flex, Heading } from "@chakra-ui/react";
import { MdErrorOutline } from "react-icons/md";

export default function Error404() {
  return (
    <Flex
      h="100vh"
      direction="column"
      justify="center"
      align="center"
      color="azulacento.500"
    >
      <MdErrorOutline fontSize="50px" />
      <Heading fontFamily="Poppins-SemiBold" fontSize="20px" color="gris.800">
        No se pudo encontrar la página
      </Heading>
    </Flex>
  );
}
