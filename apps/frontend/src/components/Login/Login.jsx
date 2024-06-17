import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { validateLogin as validate } from "../../utils/FormValidation/baseValidation";

import * as React from "react";
import { useLoginUser } from "../../utils/hooks/userQuery";
import { UserContext } from "../../utils/context/UserContext";

function Login({ sendDataToParent, ModalParent }) {
  const { mutateAsync } = useLoginUser();
  const [errorLogin, setErrorLogin] = React.useState("");
  const { user, setUser } = React.useContext(UserContext);

  const changeToggle = () => {
    sendDataToParent(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      const response = mutateAsync(values);

      response
        .then((data) => {
          //Usar data context para cargar usuario en la Barra
          //Navegacíon
          const addUser = { ...user, ...data };
          setUser(addUser);
          console.log(data);
          //Guarda en localStorage el token y usuario
          localStorage.setItem("token", data?.token);
          const localUser = {
            userId: data.userId,
            email: data.email,
            name: data.name,
            status: data.status,
          };
          localStorage.setItem("user", JSON.stringify(localUser));

          ModalParent();
        })
        .catch((errors) => {
          // const { message } = errors.response.data;
          const message = "No se pudo iniciar sesión";
          setErrorLogin(message);
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
        <Heading as={"h2"} fontSize="32px" fontWeight="400" lineHeight="48px">
          Ingresar
        </Heading>
        <Heading as={"h4"} size="md" mb={"24px"} fontWeight="400">
          No tienes cuenta?{" "}
          <ChakraLink
            onClick={changeToggle}
            color={"azulacento.500"}
            fontFamily="Poppins-Regular"
            fontWeight={"600"}
          >
            Regístrate
          </ChakraLink>
        </Heading>
      </Box>
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <FormControl mb={"16px"}>
          <FormLabel
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
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Dirección de correo"
            borderColor="gris.200"
            required
          />
          {formik.errors.email ? (
            <Text color={"red"}>{formik.errors.email}</Text>
          ) : null}
        </FormControl>
        <FormControl mb={"24px"}>
          <FormLabel
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
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="******************"
            borderColor="gris.200"
            required
          />
          {formik.errors.password && formik.touched.password ? (
            <Text color={"red"}>{formik.errors.password}</Text>
          ) : null}
        </FormControl>

        <Button
          colorScheme="azulacento"
          textColor={"white"}
          isLoading={formik.isSubmitting}
          isDisabled={formik.errors.email || formik.errors.password}
          type="submit"
          width={"100%"}
          fontFamily="Poppins-Regular"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
        >
          Inicia Sesión
        </Button>
        {errorLogin ? (
          <Text
            mt={2}
            width={"100%"}
            textAlign={"center"}
            color={"rojo.300"}
            bg={"rojo.200"}
            fontWeight={700}
          >
            {errorLogin}
          </Text>
        ) : null}
      </form>
    </Flex>
  );
}

export default Login;
