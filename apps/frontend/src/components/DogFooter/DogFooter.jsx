import React from 'react'
import {
    Image,
    Flex
    
  } from "@chakra-ui/react";
  import Dog from "../../assets/img/Dog_Footer.png";


const DogFooter = () => {
  return (
    <Flex
     justifyContent="center"
    >
      <Image
        src={Dog}
        alt='perro'
        

      >
      </Image>
    
    </Flex>
  )
}

export default DogFooter
