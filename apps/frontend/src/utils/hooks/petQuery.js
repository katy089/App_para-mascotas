import { useQuery, useMutation } from "@tanstack/react-query";
import { addPet, getPets, deletePet } from "../api/Pets/Pets";

export const useAddPet = () => {
  return useMutation({
    mutationFn: addPet,
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

export const useGetPets = () => {
  return useQuery({
    queryKey: ["pets"],
    queryFn: getPets,
  });
};

export const useDeletePet = () => {
  return useMutation({
    mutationFn: deletePet,
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
