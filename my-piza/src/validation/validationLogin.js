import * as yup from "yup";

const validSchemaLogin = yup.object().shape({
  name: yup
    .string()
    .required("Це поле обов'язкове")
    .min(2, "Мінімум два символи"),
});

export { validSchemaLogin };
