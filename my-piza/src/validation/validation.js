import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Це поле обов'язкове")
    .min(2, "Мінімум два символи"),
  phone: yup
    .string()
    .min(10, "Мінімум 10 цифр")
    .max(10, "Максимум 10 цифр")
    .required("Це поле обов'язкове")
    .matches(/^\d+$/, "Введіть коректний номер телефону"),
  address: yup.string().required("Це поле обов'язкове"),
});

export { schema };
