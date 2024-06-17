import axios from "axios";
// import { fakeURL } from "../GlobalURL";

const headers = { "Content-type": "application/json" };

import { URL_PROD_APP_PUBLIC } from "../GlobalURL";

// const URL_CUIDADOR = "/cuidadores";

// https://us-central1-safepaws-b2e52.cloudfunctions.net/appPublic/registro
// https://us-central1-safepaws-b2e52.cloudfunctions.net/appPublic/login
// const initialLogin = {
//   correo: "test@test.com",
//   contraseña: "test123*",
// };

// // https://us-central1-safepaws-b2e52.cloudfunctions.net/app/registro
// const initialRegistrar = {
//   nombre: "test",
//   correo: "test@test.com",
//   contraseña: "test123*",
// };

export const getCareGivers = async () => {
  const response = await axios.get(
    URL_PROD_APP_PUBLIC + "/cuidadores",
    {headers}
  );
  console.log(response)
  return response.data;
};

export const getUserID = async (id) => {
  const response = await axios.get(`${fakeURL}/${id}`);
  console.log(response.data);
  return response.data;
};
