import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Spacer,
  useBoolean,
  useMediaQuery,
  Link as ChakraLink,
} from "@chakra-ui/react";
import LogoBanner from "../../assets/logos/LogoBanner.svg";
import { IoMenu, IoClose } from "react-icons/io5";
import NavBar from "../NavBar/NavBar";
import {
  useNavigate,
} from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useBoolean();
  const [isSmallerThan640] = useMediaQuery("(max-width: 640px)");
  const navigate = useNavigate();

  useEffect(() => {
    //Modifica el color del header al hacer scroll
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <header
      style={{
        position: "fixed",
        zIndex: "2",
        width: "100%",
        backgroundColor: scrolled ? "#FAFAFA" : "",
      }}
    >
      <Flex align="center" mx={{ base: "20px", md: "100px" }}>
        <ChakraLink
          onClick={() => handleNavClick("banner")}
          alignSelf="center"
          color="gris.700"
          fontFamily="Poppins-Medium"
          _hover={{ color: "azulacento.500" }}
          _focus={{ color: "azulacento.500" }}
          _active={{ color: "azulacento.500" }}
        >
          <Image boxSize={20} src={LogoBanner} alt="Logo" />
        </ChakraLink>
        <Spacer />
        {isSmallerThan640 ? (
          <Box>
            <IconButton
              border="none"
              onClick={setIsOpen.toggle}
              icon={isOpen ? <IoClose size="32px" /> : <IoMenu size="32px" />}
              variant="outline"
              aria-label="Menu"
            />
          </Box>
        ) : (
          <NavBar direction="row" background="" />
        )}
      </Flex>
      {isOpen && <NavBar direction="column" background="beige" />}
    </header>
  );
}
