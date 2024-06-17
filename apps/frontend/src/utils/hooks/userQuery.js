import { useQuery, useMutation } from "@tanstack/react-query";
import {
  // getUsers,
  // getUserID,
  LoginUser,
  RegisterUser,
} from "../api/Users/Users";

//******PRUEBA DE QUERY*******/
// export const useGetUsers = () => {
//   return useQuery({ queryKey: ["users"], queryFn: getUsers });
// };

// export const useGetUser = (id) => {
//   return useQuery({ queryKey: ["user", id], queryFn: () => getUserID(id) });
// };
//********************************* */

//***********************************/
//LOGIN DE USUARIOS
export const useLoginUser = () => {
  return useMutation({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      //"Se ha logeado correctamente";
      return data;
    },
    onError: (errors) => {
      return errors;
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries('create');
    // }
  });
};
//******************************* */
//REGISTRO DE NUEVO USUARIO
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: RegisterUser,
    onSuccess: (data) => {
      // "Se ha registrado correctamente!!!";

      return data;
    },
    onError: (errors) => {
      return errors;
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries('create');
    // }
  });
};
//*****************// */
