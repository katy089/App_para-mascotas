import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  // useDisclosure,
  FormLabel,
  FormControl,
  Input,
  useRadioGroup,
  HStack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import RadioTypePet from "../RadioTypePet/RadioTypePet";
import { useAddPet } from "../../utils/hooks/petQuery";
import { useFormik } from "formik";

export default function ModalAddPet({ isOpen, onOpen, onClose }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync } = useAddPet();
  const options = ["Perro", "Gato"];
  const formik = useFormik({
    initialValues: {
      namePet: "",
      typePet: "",
    },

    onSubmit: (values, { setSubmitting }) => {
      const response = mutateAsync(values);
      response
        .then((data) => console.log(data))
        .catch((e) => console.log(e))
        .finally(() => {
          setSubmitting(false);
        });
      alert(JSON.stringify(values));
      // setSubmitting(false);
    },
  });

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { getRootProps, getRadioProps } = useRadioGroup({
    id: "typePet",
    name: "typePet",
    defaultValue: "perro",
    onChange: (value) => {
      formik.setFieldValue("typePet", value);
    },
  });

  const group = getRootProps();

  return (
    <>
      <Button
        onClick={onOpen}
        fontSize="Poppins-SemiBold"
        bg="azulacento.500"
        color="white"
        _hover={{ backgroundColor: "azulacento.600" }}
        _focus={{ backgroundColor: "azulacento.600" }}
        _active={{ backgroundColor: "azulacento.600" }}
      >
        Agregar mascota
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            alignSelf="center"
            fontSize="16px"
            fontFamily="Poppins-Regular"
            fontWeight="600"
            lineHeight="24px"
          >
            Agregando Mascota
          </ModalHeader>
          <ModalCloseButton />
          <Divider
            alignSelf="center"
            borderWidth="1px"
            borderColor="azulacento.800"
            opacity="20%"
            w="100%"
          />
          <ModalBody pb={6}>
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
              <FormControl>
                <FormLabel
                  fontFamily="Poppins-Regular"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="24px"
                  htmlFor="typePet"
                >
                  Tipo de animal
                </FormLabel>
                <Flex justify="center" align="center">
                  <HStack
                    {...group}
                    p="4px"
                    border="1px solid"
                    borderColor="gris.300"
                    borderRadius={7}
                  >
                    {options.map((value) => {
                      const radio = getRadioProps({ value });
                      // formik.values.typePet = value;
                      return (
                        <RadioTypePet key={value} {...radio}>
                          {value}
                        </RadioTypePet>
                      );
                    })}
                  </HStack>
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily="Poppins-Regular"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="24px"
                  htmlFor="namePet"
                >
                  Nombre
                </FormLabel>
                <Input
                  id="namePet"
                  name="namePet"
                  ref={initialRef}
                  borderColor="gris.200"
                  placeholder="Nombre"
                  onChange={formik.handleChange}
                  value={formik.values.namePet}
                />
              </FormControl>
              <Divider
                alignSelf="center"
                borderWidth="1px"
                borderColor="azulacento.800"
                mt={5}
                opacity="20%"
                w="100%"
              />
              <Button
                mt={5}
                w="100%"
                fontSize="Poppins-SemiBold"
                bg="azulacento.500"
                color="white"
                _hover={{ backgroundColor: "azulacento.600" }}
                _focus={{ backgroundColor: "azulacento.600" }}
                _active={{ backgroundColor: "azulacento.600" }}
                mr={3}
                isLoading={formik.isSubmitting}
                type="submit"
              >
                Ingresar +
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
