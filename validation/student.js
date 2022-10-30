import * as yup from "yup";

const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  whatsapp: yup.string().required("whatsapp number is required"),
  phone: yup.string().required("phone number is required"),
  program: yup.string().required("program is required"),
  language: yup.string().required("language is required"),
});

export default userSchema;
