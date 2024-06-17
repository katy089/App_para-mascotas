import {
  Box,
  Heading,
  Input,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useFormik } from "formik";
import { validateRegister as validate } from "../../utils/FormValidation/baseValidation";
import { useRegisterUser } from "../../utils/hooks/userQuery";

import * as React from "react";

function Register({ sendDataToParent }) {
  const { mutateAsync } = useRegisterUser();
  const [errorRegister, setErrorRegister] = React.useState();
  const [successRegister, setSuccessRegister] = React.useState();

  const changeToggle = () => {
    sendDataToParent(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpass: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      const response = mutateAsync(values);

      response
        .then((data) => {
          setSuccessRegister("Se ha registrado correctamente");
        })
        .catch((errors) => {
          const { message } = errors.response.data;
          setErrorRegister(message);
        })
        .finally(() => setSubmitting(false));
    },
  });
  return (
    <Flex
      padding="32px 40px"
      direction="column"
      align="center"
      justify="center"
    >
      <Box gap={2} textAlign="center">
        <Heading as="h2" fontSize="32px" fontWeight="400" lineHeight="48px">
          Regístrate
        </Heading>
        <Heading as="h4" size="md" noOfLines={1} mb={"24px"} fontWeight="400">
          Ya tienes una cuenta?{" "}
          <ChakraLink
            onClick={changeToggle}
            fontFamily="Poppins-Regular"
            color={"azulacento.500"}
            fontWeight={"600"}
          >
            Inicia sesión
          </ChakraLink>
        </Heading>
      </Box>

      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <FormControl mb={"16px"}>
          <FormLabel
            mb={"4px"}
            htmlFor="name"
            fontFamily="Poppins-Regular"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
          >
            Nombre
          </FormLabel>
          <Input
            id="name"
            name="name"
            type="name"
            placeholder="Nombre"
            borderColor="gris.200"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <Text color={"red"}>{formik.errors.name}</Text>
          ) : null}
        </FormControl>
        <FormControl mb={"16px"}>
          <FormLabel
            mb={"4px"}
            htmlFor="email"
            fontFamily="Poppins-Regular"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
          >
            Correo electrónico
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Correo@..."
            borderColor="gris.200"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{" "}
          {formik.errors.email ? (
            <Text color={"red"}>{formik.errors.email}</Text>
          ) : null}
        </FormControl>

        <FormControl mb={"16px"}>
          <FormLabel
            mb={"4px"}
            htmlFor="password"
            fontFamily="Poppins-Regular"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
          >
            Contraseña
          </FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            borderColor="gris.200"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <Text color={"red"}>{formik.errors.password}</Text>
          ) : null}
        </FormControl>
        <FormControl mb={"24px"}>
          <FormLabel
            mb={"4px"}
            htmlFor="confirmpass"
            fontFamily="Poppins-Regular"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
          >
            Confirmar Contraseña
          </FormLabel>
          <Input
            id="confirmpass"
            name="confirmpass"
            type="password"
            placeholder="******************"
            borderColor="gris.200"
            onChange={formik.handleChange}
            value={formik.values.confirmpass}
          />
          {formik.errors.confirmpass ? (
            <Text color={"red"}>{formik.errors.confirmpass}</Text>
          ) : null}
        </FormControl>

        <Button
          colorScheme="azulacento"
          textColor={"white"}
          isLoading={formik.isSubmitting}
          isDisabled={
            formik.errors.name ||
            formik.errors.email ||
            formik.errors.password ||
            formik.errors.confirmpass
          }
          type="submit"
          width={"100%"}
          fontFamily="Poppins-Regular"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
        >
          Regístrate
        </Button>
        {successRegister ? (
          <Text
            mt={2}
            width={"100%"}
            textAlign={"center"}
            color={"green"}
            bg={"verdeacento.200"}
            fontWeight={700}
          >
            {successRegister}
          </Text>
        ) : null}
        {errorRegister ? (
          <Text
            mt={2}
            width={"100%"}
            textAlign={"center"}
            color={"rojo.300"}
            bg={"rojo.200"}
            fontFamily="Poppins-Medium"
          >
            {errorRegister}
          </Text>
        ) : null}
      </form>
    </Flex>
  );
}

export default Register;
