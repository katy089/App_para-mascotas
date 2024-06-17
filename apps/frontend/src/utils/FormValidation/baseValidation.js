export const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Formato de Correo Eletrónico Inválido";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 3) {
    errors.password = "Debe tener más de 3 carácteres";
  }

  return errors;
};

export const validateRegister = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Debe tener más de 3 carácteres";
  } else if (values.name.length > 200) {
    errors.name = "Debe tener menos de 200 carácteres";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Formato de Correo Eletrónico Inválido";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Debe tener más de 6 carácteres";
  }

  if (!values.confirmpass) {
    errors.confirmpass = "Required";
  } else if (values.confirmpass.length < 6) {
    errors.confirmpass = "Debe tener más de 6 carácteres";
  }
  return errors;
};
