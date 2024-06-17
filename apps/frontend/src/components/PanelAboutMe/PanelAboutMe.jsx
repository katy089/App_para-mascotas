import React from "react";
import { Heading, Text, Grid, GridItem } from "@chakra-ui/react";

export default function PanelAboutMe({ name, aboutMe }) {
  return (
    <>
      <Heading
        fontFamily="Poppins-SemiBold"
        fontSize="24px"
        color="black"
        mb="16px"
      >
        {name}
      </Heading>
      {/* <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            mb="40px"
          >
            <GridItem rowSpan={2} colSpan={2} bg="tomato" />
            <GridItem colSpan={1} bg="papayawhip" />
            <GridItem colSpan={1} bg="papayawhip" />
            <GridItem colSpan={1} bg="tomato" />
            <GridItem colSpan={1} bg="tomato" />
          </Grid> */}
      <Text fontFamily="Poppins-Regular" fontSize="16px" color="gris.800">
        {aboutMe}
      </Text>
      <Text fontFamily="Poppins-Regular" fontSize="16px" color="gris.800">
        Soy un amante de los animales con una pasión innata por brindar el mejor
        cuidado posible a las mascotas. Desde mi infancia, he tenido una
        conexión especial con los animales, lo que me llevó a dedicar mi vida al
        bienestar y la felicidad de nuestros amigos peludos.
      </Text>
      <br></br>
      <Text fontFamily="Poppins-Regular" fontSize="16px" color="gris.800">
        Experiencia
      </Text>
      <Text fontFamily="Poppins-Regular" fontSize="16px" color="gris.800">
        Cuento con años de experiencia trabajando con una variedad de razas y
        personalidades de mascotas. He tenido el privilegio de cuidar de perros
        de todos los tamaños, desde los más pequeños hasta los más grandes, así
        como de gatos y otros animales domésticos. Mi experiencia me ha enseñado
        a adaptarme a las necesidades individuales de cada mascota y a
        proporcionarles el amor y la atención que se merecen.
      </Text>
      <br></br>
      <Text fontFamily="Poppins-Regular" fontSize="16px" color="gris.800">
        Dónde estará tu mascota
      </Text>
      <Text fontFamily="Poppins-Regular" fontSize="16px" color="gris.800">
        Tu mascota estará en un hogar amoroso y seguro, donde será tratada como
        parte de mi familia. Mi hogar está diseñado para brindar comodidad y
        entretenimiento para los peludos, con amplias áreas para jugar,
        descansar y explorar. Además, siempre estoy presente para brindar
        compañía, cuidado y supervisión durante toda su estancia.
      </Text>
      <br></br>
      <Text fontFamily="Poppins-Regular" fontSize="16px" color="gris.800">
        Otra información
      </Text>
      <Text
        fontFamily="Poppins-Regular"
        fontSize="16px"
        color="gris.800"
        mb="40px"
      >
        Además de cuidar de las necesidades físicas de tu mascota, también me
        comprometo a brindarle un ambiente emocionalmente enriquecedor. Durante
        su estancia, tu mascota recibirá atención personalizada, ejercicio
        regular y estimulación mental para garantizar su bienestar integral.
        Estoy disponible para discutir cualquier necesidad especial que tenga tu
        mascota y trabajar juntos para crear una experiencia de cuidado
        perfecta.
      </Text>
    </>
  );
}
