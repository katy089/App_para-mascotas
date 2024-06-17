import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import PanelAboutMe from "../PanelAboutMe/PanelAboutMe";
import PanelServicesAndRates from "../PanelServicesAndRates/PanelServicesAndRates";
import PanelReview from "../PanelReview/PanelReview";
import PanelLocation from "../PanelLocation/PanelLocation";
import PanelAvailability from "../PanelAvailability/PanelAvailability";

export default function AccordionDetailsCaregiver({
  name,
  aboutMe,
  catAccepted,
  dogAccepted,
  city,
  approximateLongitude, 
  approximateLatitude,
  rates
}) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Sobre mí
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <PanelAboutMe name={name} aboutMe={aboutMe} />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Servicios y Tarifas
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <PanelServicesAndRates
            catAccepted={catAccepted}
            dogAccepted={dogAccepted}
            rates={rates}
          />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Disponibilidad
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <PanelAvailability />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Ubicación
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <PanelLocation city={city} approximateLongitude={approximateLongitude} approximateLatitude={approximateLatitude} />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Valoración
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <PanelReview />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
