import * as yup from "yup";

const registerSchema = yup.object().shape({
  whatsapp: yup.string().required("whatsapp number is required"),
  phone: yup.string().required("phone number is required"),
  program: yup.string().required("program is required"),
  language: yup.string().required("language is required"),
});

export default registerSchema;
