import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PanelAboutMe from "../PanelAboutMe/PanelAboutMe";
import PanelServicesAndRates from "../PanelServicesAndRates/PanelServicesAndRates";
import PanelAvailability from "../PanelAvailability/PanelAvailability";
import PanelLocation from "../PanelLocation/PanelLocation";
import PanelReview from "../PanelReview/PanelReview";

export default function TabsDetailsCaregiver({
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
    <Tabs colorScheme="purple">
      <TabList>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Sobre mí
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Servicios y Tarifas
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Disponibilidad
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Ubicación
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Valoración
        </Tab>
      </TabList>

      <TabPanels>
        {/* Sobre mí */}
        <TabPanel>
          <PanelAboutMe name={name} aboutMe={aboutMe} />
        </TabPanel>

        {/* Servicios y Tarifas */}
        <TabPanel>
          <PanelServicesAndRates
            catAccepted={catAccepted}
            dogAccepted={dogAccepted}
            rates={rates}
          />
        </TabPanel>

        {/* Disponibilidad */}
        <TabPanel>
          <PanelAvailability />
        </TabPanel>

        {/* Ubicación */}
        <TabPanel>
          <PanelLocation city={city} approximateLatitude={approximateLatitude} approximateLongitude={approximateLongitude} />
        </TabPanel>

        {/* Valoración */}
        <TabPanel>
          <PanelReview />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
