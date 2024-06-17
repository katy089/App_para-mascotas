import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import RatesHome from "./components/RatesHome/RatesHome";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";

import "./App.css";
import CareGivers from "./pages/CareGiver";
import UserProfile from "./pages/UserProfile";
import * as React from "react";
import { UserContext } from "./utils/context/UserContext";

import { useGetPets } from "./utils/hooks/petQuery";
import { useGetReservations } from "./utils/hooks/reservationQuery";

function App() {
  const { user, setUser } = React.useContext(UserContext);
  const {
    isPending: isPendingP,
    error: errorP,
    data: dataP,
    isFetching: isFetchingP,
  } = useGetPets();
  const {
    isPending: isPendingR,
    error: errorR,
    data: dataR,
    isFetching: isFetchingR,
  } = useGetReservations();
  React.useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      const addUser = { ...user, ...localUser };

      setUser(addUser);
      // if (!isPendingR && !isPendingP) {
      //   console.log("Pet Error: " + errorP, "Data: " + JSON.stringify(dataP));
      //   console.log("Reser Error: " + errorR, "Data: " + JSON.stringify(dataR));
      // }
    }

    // console.log(user);
  }, [isFetchingP, isFetchingR]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuidadores" element={<CareGivers />} />
        <Route path="/details/:idCaregiver" element={<DetailsCaregiver />} />        
        <Route path="/myprofile" element={<UserProfile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Outlet />
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
