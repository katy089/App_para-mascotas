import axios from "axios";
const token = localStorage.getItem("token");
const headers = {
  "Content-type": "application/json",
  Authorization: "Bearer " + token,
};

import { URL_PROD_APP } from "../GlobalURL";

export const addPet = async (data) => {
  // Formato
  // "nombre": "Malin",
  // "especie": "Gato",
  // "edad": "2*"

  const nombre = data.namePet;
  const especie = data.typePet;
  const edad = 1;

  const response = await axios.post(
    URL_PROD_APP + "/pets",
    { nombre, especie, edad },
    { headers }
  );
  return response.data;
};

export const getPets = async (idUser) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  // console.log(localUser);
  const response = await axios.get(URL_PROD_APP + "/pets/" + localUser.userId, {
    headers,
  });
  return response.data;
};

export const deletePet = async (idPet) => {
  const response = await axios.delete(URL_PROD_APP + "/pets/" + idPet, {
    headers,
  });
  return response.data;
};
