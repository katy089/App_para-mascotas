import { useEffect, useRef } from "react";
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
  Divider,
  Box,
} from "@chakra-ui/react";
import { Form, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useGetGivers } from "../../utils/hooks/giverQuery";
import { BsArrowRightCircleFill } from "react-icons/bs";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish } from "flatpickr/dist/l10n/es";

const SearchingBar = () => {
  const navegate = useNavigate();
  const { mutateAsync } = useGetGivers();
  const currentDateInputRef = useRef(null);

  useEffect(() => {
    flatpickr(currentDateInputRef.current, {
      locale: "es",
      dateFormat: "d-m-Y",
      minDate: "today",
      onChange: function (selectedDates, dateString) {
        formik.setFieldValue("currentDateSend", dateString);
      },
    });
    flatpickr.localize(Spanish);
  }, []);

  const formik = useFormik({
    initialValues: {
      pet: "",
      currentDateSend: new Date()
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join("-"),
    },
    // validate,
    onSubmit: (values, { setSubmitting }) => {
      const givers = mutateAsync();
      givers
        .then((data) => {
          const currentDate = values.currentDateSend;

          const cuidadorData = { ...data, currentDate };
          console.log(JSON.stringify(cuidadorData));
          console.log(JSON.stringify(currentDate));
          navegate("/cuidadores", { state: { cuidadorData } });
        })
        .catch((e) => console.log(e))
        .finally(() => setSubmitting(false));
    },
  });

  return (
    <Box
      p={{ base: "20px 15px", md: "20px 40px" }}
      border="2px solid"
      borderColor="azulacento.200"
      borderRadius="18px"
      bg="white"
      zIndex={1}
      w={{ base: "93vw", sm: "92vw", md: "73vw", lg: "65vw" }}
      mt={{ base: 0, "2xl": 72 }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          gap="20px"
        >
          <FormControl>
            <FormLabel htmlFor="pet" fontFamily="Poppins-Medium">
              Mascota
            </FormLabel>
            <Select
              borderColor={{ base: "gris.200", lg: "white" }}
              id="pet"
              name="pet"
              type="pet"
              value={formik.values.pet}
              onChange={formik.handleChange}
              color="gris.600"
              icon="none"
            >
              <option value="Dog" defaultValue>
                Perro
              </option>
              <option value="Cat">Gato</option>
              <option value="Both">Ambos</option>
            </Select>
          </FormControl>
          <Divider
            display={{ base: "none", lg: "block" }}
            orientation="vertical"
            borderWidth="1px"
            borderColor="azulacento.800"
            opacity="20%"
            h="60px"
          />
          <FormControl>
            <FormLabel htmlFor="currentDateSend" fontFamily="Poppins-Medium">
              Fecha
            </FormLabel>
            <Input
              ref={currentDateInputRef}
              borderColor={{ base: "gris.200", lg: "white" }}
              id="currentDate"
              name="currentDate"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.currentDateSend}
              color="gris.600"
              data-date-format="DD MMMM YYYY"
            />
            {/* {formik.errors.password ? (
            <Text color={"red"}>{formik.errors.password}</Text>
          ) : null} */}
          </FormControl>
          <Divider
            display={{ base: "none", lg: "block" }}
            orientation="vertical"
            borderWidth="1px"
            borderColor="azulacento.800"
            opacity="20%"
            h="60px"
          />
          <Divider orientation="vertical" mx={2} />
          <Button
            colorScheme="azulacento"
            textColor={"white"}
            isLoading={formik.isSubmitting}
            isDisabled={
              formik.errors.pet ||
              formik.errors.service ||
              formik.errors.currentDate
            }
            type="submit"
            py="28px"
            border="2px"
            borderColor="azulacento.200"
            w={{ base: "100%", md: "50%" }}
            borderRadius="10px"
            gap="10px"
            fontFamily="Poppins-Regular"
            fontSize="18px"
            fontWeight="600"
            lineHeight="24px"
            rightIcon={<BsArrowRightCircleFill size="20px" />}
          >
            Buscar
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default SearchingBar;
