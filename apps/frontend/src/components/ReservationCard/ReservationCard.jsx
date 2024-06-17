import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import ImgMei from "../../assets/img/ImgMei.png";

export default function ReservationCard({
  id,
  careName,
  date,
  mypet,
  onClick,
}) {
  return (
    <Flex align="center" margin={"20px auto"} gap={"20px"}>
      <Box>
        <Image src={ImgMei} alt="Iamgen del cuidador" />
      </Box>
      <Heading
        as="h4"
        fontFamily="Poppins-Medium"
        fontSize="20px"
        fontWeight="600"
        lineHeight="30px"
        color="gris.800"
      >
        {date}
      </Heading>
      <Heading
        as="h4"
        fontFamily="Poppins-Medium"
        fontSize="20px"
        fontWeight="600"
        lineHeight="30px"
        color="gris.800"
      >
        {careName}
      </Heading>
      <Heading
        as="h4"
        fontFamily="Poppins-Medium"
        fontSize="20px"
        fontWeight="600"
        lineHeight="30px"
        color="gris.800"
      >
        {mypet}
      </Heading>
      <Button bg={"rojo.200"} color={"white"} onClick={onClick}>
        Delete
      </Button>
    </Flex>
  );
}
