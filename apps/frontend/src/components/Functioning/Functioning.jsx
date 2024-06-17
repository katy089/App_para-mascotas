import React from "react";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import Union from "../../assets/img/Union.png";
import ProcessFunctioning from "../ProcessFunctioning/ProcessFunctioning";
import WantedDog from "../../assets/img/WantedDog.png"
import PlayingDog from "../../assets/img/PlayingDog.png"
import ReserveDog from "../../assets/img/ReserveDog.png"
import PawGreen from "../../assets/icons/pawGreen.svg"

export default function Functioning() {
  return (
    <Box
      bg="white"
      bgImage={`url(${Union})`}
      bgSize="100% 100%"
      bgRepeat="no-repeat"
      p="100px"
      gap="40px"
    >
      <Flex direction="column" align="center" textAlign="center" pos="relative">
        <Heading as="h2" w={{ sm:"50vw", lg:"60vw", xl: "45vw"}} fontWeight="600" lineHeight="60px">
          Busquemos a mi compañero de aventura
        </Heading>
        <Image src={PawGreen} alt="Patita Verde" pos="absolute"top={12} right={0} />
        <Image src={PawGreen} alt="Patita Verde" pos="absolute"bottom={6} left={-12} style={{ transform: 'rotate(-90deg)' }}/>
        <Flex direction={{base: "column", lg: "row"}} justify="space-between" gap="20px" mb={10}>
          <ProcessFunctioning image={WantedDog} title="Explora" description="Mi humano husmea en busca del compañero de aventura perfecto para mi." />
          <ProcessFunctioning image={ReserveDog} title="Encuentra" description="Mi humano se registra y reserva con un clic a mi nuevo compañero." />
          <ProcessFunctioning image={PlayingDog} title="A jugar" description="Estoy en las mejores patas con mi nuevo amigo humano. Además, cuento con un soporte que me protege durante mi estadía." />
        </Flex>
      </Flex>
    </Box>
  );
}
