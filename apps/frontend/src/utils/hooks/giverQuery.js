import { useQuery, useMutation } from "@tanstack/react-query";
import { getCareGivers } from "../api/CareGivers/CareGivers";

export const useGetGivers = () => {
  return useMutation({
    mutationFn: getCareGivers,
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

// export const useGetGiversAll = () => {
//   return useQuery({
//     mutationFn: getCareGivers,
//     onSuccess: (data) => {
//       //"Se ha logeado correctamente";
//       return data;
//     },
//     onError: (errors) => {
//       return errors;
//     },
//     // onSettled: () => {
//     //   queryClient.invalidateQueries('create');
//     // }
//   });
// };
