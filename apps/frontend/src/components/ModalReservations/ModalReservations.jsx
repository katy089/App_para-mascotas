import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Select,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import * as React from "react";
import { UserContext } from "../../utils/context/UserContext";
import { useAddReservations } from "../../utils/hooks/reservationQuery";
import moment from "moment";

const ModalReservations = (props) => {
  const { isOpen, onClose, sitterID, petstartDateID } = props;
  const { user } = React.useContext(UserContext);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { mutateAsync } = useAddReservations();

  const formik = useFormik({
    initialValues: {
      userId: user.userId,
      petID: "hdUHaEBPokgGP4OrNcTFebTeg572",
      petstartDateID: "2024/07/04",
      sitterID,
      endDate: "2025/04/05",
    },
    // validate,
    onSubmit: (values, { setSubmitting }) => {
      const response = mutateAsync(values);
      response
        .then((data) => console.log(data))
        .catch((e) => console.log(e))
        .finally(() => {
          setSubmitting(false);
          onClose();
        });
      // setSubmitting(false);
    },
  });

  return (
    <div>
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="xl"
          isCentered
        >
          <ModalOverlay />
          <ModalContent w="100%" maxW="300px" mx="auto" bg="gray.100">
            {/* <ModalHeader>Create your account</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
              <Flex justify="space-between" align="center" pt="25px" pb="15px">
                <Text
                  fontSize="16px"
                  fontFamily="Poppins-Medium"
                  color="azulacento.500"
                  bg={"azulacento.100"}
                  p="4px 8px"
                  borderRadius="6px"
                >
                  Guardería
                </Text>
                <Heading
                  fontSize="22px"
                  as="h3"
                  fontWeight="300"
                  color="gris.800"
                >
                  <strong>$7000</strong> día
                </Heading>
              </Flex>
              <form
                onSubmit={formik.handleSubmit}
                style={{ paddingBottom: "20px" }}
              >
                <FormControl>
                  <FormLabel
                    htmlFor="currentDate"
                    fontFamily="Poppins-Medium"
                    fontSize="14px"
                  >
                    Fecha
                  </FormLabel>
                  <Text
                    p="8px 15px"
                    border="1px solid"
                    borderColor="gris.200"
                    borderRadius="5px"
                    w="100%"
                    color="azulacento.500"
                  >
                    {petstartDateID}
                  </Text>
                  {/* {formik.errors.password ? (
                    <Text color={"red"}>{formik.errors.password}</Text>
                  ) : null} */}
                </FormControl>
                <FormControl margin="20px 0">
                  <FormLabel
                    htmlFor="currentDate"
                    fontFamily="Poppins-Medium"
                    fontSize="14px"
                  >
                    Mascota
                  </FormLabel>
                  <Select
                    borderColor="gris.200"
                    id="petID"
                    name="petID"
                    placeholder="Seleccionar"
                    onChange={formik.handleChange}
                    value={formik.values.petID}
                  >
                    {user?.pets.map((pet) => (
                      <option key={pet.id} value={pet.id}>
                        {pet.name}
                      </option>
                    ))}
                  </Select>
                  {/* {formik.errors.password ? (
                    <Text color={"red"}>{formik.errors.password}</Text>
                  ) : null} */}
                </FormControl>

                <Button
                  colorScheme="azulacento"
                  textColor="white"
                  isLoading={formik.isSubmitting}
                  isDisabled={formik.errors.pet || formik.errors.currentDate}
                  type="submit"
                  width="100%"
                  fontFamily="Poppins-SemiBold"
                  lineHeight="24px"
                  fontSize="15px"
                >
                  Reservar
                </Button>
              </form>
              <Divider
                borderWidth="0.5px"
                borderColor="azulacento.800"
                opacity="20%"
                w="100%"
              />
              <Flex justify="space-between" padding="12px 0px" color="gris.800">
                <Text
                  fontSize="18px"
                  fontWeight={500}
                  fontFamily="Poppins-SemiBold"
                >
                  Total
                </Text>
                <Text
                  fontSize="18px"
                  fontWeight={500}
                  fontFamily="Poppins-SemiBold"
                >
                  $7000
                </Text>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default ModalReservations;
