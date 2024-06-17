import { Container, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import CaregiverCard from "../components/CaregiverCard/CaregiverCard";
import { useContext } from "react";
import { UserContext } from "../utils/context/UserContext";
import moment from "moment";

const CareGivers = (props) => {
  const { state } = useLocation();
  const { user, setUser } = useContext(UserContext);
  const addReservation = (item) => {
    const newReservation = {
      id: user.reservations.length + 1,
      date: "05/06/24",
      careName: item.name,
      mypet: "lolo",
    };
    //agregar a pets al array de user
    const reservations = [...user.reservations, newReservation];
    //Sobreescribir pets sin perder datos previos de user
    const addUserReservations = { ...user, reservations };
    setUser(addUserReservations);
  };

  return (
    <Container pt={"80px"} minH={"1200px"}>
      <Heading
        as="h3"
        fontFamily="Poppins-Medium"
        fontSize="24px"
        fontWeight="600"
        lineHeight="30px"
        color="gris.800"
      >
        Cuidadores {state.cuidadorData.currentDate}
      </Heading>
      {/* {JSON.stringify(user?.reservations)} */}
      <ul>
        {state.cuidadorData.data.map((item) => (
          <CaregiverCard
            id={item.idCuidador}
            name={item.name}
            photo={item.photo}
            currentDate={state.cuidadorData.currentDate}
            key={item.idCuidador}
            onAddReservation={() => addReservation(item)}
          />
        ))}
      </ul>
    </Container>
  );
};

export default CareGivers;
