import React from "react";
import { Box, Link, Text, Image, Divider, Flex } from "@chakra-ui/react";
import LogoFooter from "../../assets/img/LogoFooter.svg";
import LogoF from "../../assets/img/facebook.svg";
import LogoC from "../../assets/img/correo.svg";
import LogoW from "../../assets/img/wpp.svg";
import LogoI from "../../assets/img/instagram.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  //Hace que los links se dirijan a la sección del home que corresponda
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
    <Box
      as="footer"
      bg="azulacento.500"
      p={{ base: "32px 20px", lg: "32px 100px" }}
    >
      <Flex
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        marginBottom="20px"
      >
        <Flex
          direction="column"
          justify={{ base: "center", lg: "start" }}
          align={{ base: "center", lg: "start" }}
        >
          <Box mb="20px">
            <Image src={LogoFooter} alt="LogoFooter" />
          </Box>
          <Text
            color="#FAFAFA"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            fontSize="14px"
            lineHeight="19px"
          >
            Tus mascotas en las mejores manos
          </Text>
        </Flex>
        <Flex mt={{base: 8, lg: 0}} gap={6} direction={{ base: "column", lg: "row" }}>
          <Box mt="20px" m={{ base: "0px", lg: "0" }}>
            <Text
              as="h2"
              color="white"
              fontFamily="Poppins-Medium"
              fontSize="16px"
              textAlign={{ base: "center", lg: "start" }}
            >
              Secciones
            </Text>
            <Flex
              mt="16px"
              flexDirection="column"
              gap="8px"
              textAlign={{ base: "center", lg: "start" }}
            >
              <Link
                onClick={() => handleNavClick("banner")}
                color="gris.100"
                fontSize="14px"
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight="21px"
              >
                Inicio
              </Link>
              <Link
                onClick={() => handleNavClick("about")}
                color="gris.100"
                fontSize="14px"
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight="21px"
              >
                Sobre nosotros
              </Link>
              <Link
                onClick={() => handleNavClick("rates")}
                color="gris.100"
                fontSize="14px"
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight="21px"
              >
                Tarifas
              </Link>
            </Flex>
          </Box>
          <Box>
            <Text
              as="h2"
              color="white"
              fontFamily="Poppins-Medium"
              fontSize="16px"
              textAlign={{ base: "center", lg: "start" }}
            >
              Redes
            </Text>
            <Flex
              flexDirection="column"
              mt="16px"
              textAlign={{ base: "center", lg: "start" }}
            >
              <Flex justify="center" align="center" gap="8px">
                <Image src={LogoI} alt="LogoInstagram" />
                <Link
                  margin="4px"
                  color="gris.100"
                  fontSize="14px"
                  fontFamily="Poppins-Regular"
                  fontWeight={400}
                  lineHeight="21px"
                  href="https://www.instagram.com/safepaws.bsas/?igsh=amVod3Fmc2RtdWRh&utm_source=qr"
                  target="_blank"
                >
                  Instagram
                </Link>
              </Flex>
              {/* <Flex justify="center" align="center">
                <Image src={LogoF} alt="LogoFacebook" />
                <Link
                  color="gris.100"
                  fontSize="14px"
                  fontFamily="Poppins-Regular"
                  padding="8px"
                  fontWeight={400}
                  lineHeight="21px"
                >
                  Facebook
                </Link>
              </Flex> */}
            </Flex>
          </Box>
          <Box>
            <Text
              as="h2"
              color="white"
              fontFamily="Poppins-Medium"
              fontSize="16px"
              textAlign={{ base: "center", lg: "start" }}
            >
              Contactanos
            </Text>
            <Flex flexDirection="column" mt="16px" gap="8px">
              <Flex justify="center" align="center" gap="8px">
                <Image src={LogoW} alt="LogoTelefono" />
                <Text
                  margin="4px"
                  color="gris.100"
                  fontSize="14px"
                  fontFamily="Poppins-Regular"
                  fontWeight={400}
                  lineHeight="21px"
                >
                  +54 11 1234 5678
                </Text>
              </Flex>
              <Flex justify="center" align="center" gap="8px">
                <Image src={LogoC} alt="LogoCorreo" />
                <Text
                  color="gris.100"
                  fontSize="14px"
                  fontFamily="Poppins-Regular"
                  fontWeight={400}
                  lineHeight="21px"
                >
                  Safe@paws.com
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Divider />
      <Flex justify="space-between" align="center" color="white" gap="24px">
        <Box mt="24px">
          <Text fontWeight={400} lineHeight="18px" fontSize="12px">
            Todos los derechos reservados 2024
          </Text>
        </Box>

        <Box mt="24px">
          <Link
            margin="16px"
            fontWeight={400}
            lineHeight="21px"
            fontFamily="Poppins-Regular"
            textDecor="none"
            fontSize="14px"
          >
            Términos
          </Link>
          <Link
            fontWeight={400}
            lineHeight="21px"
            fontFamily="Poppins-Regular"
            textDecor="none"
            fontSize="14px"
          >
            Privacidad
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
