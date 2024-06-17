import React, { useEffect } from "react";
import { Image, Flex, Heading, Text, Box } from "@chakra-ui/react";
import IconLocation from "../../assets/icons/IconLocation.svg";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function PanelLocation({
  city,
  approximateLatitude,
  approximateLongitude,
}) {
  function ResizeMap() {
    const map = useMap();
    useEffect(() => {
      map.invalidateSize();
    }, [map]);
    return null;
  }

  return (
    <Box mb="40px">
      <Heading
        fontFamily="Poppins-SemiBold"
        fontSize="24px"
        color="black"
        mb="16px"
      >
        Ubicación
      </Heading>
      <Flex gap={2} mb="40px">
        <Image src={IconLocation} alt="Icono de ubicación" />
        <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
          {city}
        </Text>
      </Flex>
      <Box width="100%" height="500px" borderRadius={20}>
        <MapContainer
          center={[approximateLatitude, approximateLongitude]}
          zoom={8}
          style={{ height: "100%", width: "100%", zIndex: "-1" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[approximateLatitude, approximateLongitude]}
          ></Marker>
          <ResizeMap />
        </MapContainer>
      </Box>
    </Box>
  );
}
