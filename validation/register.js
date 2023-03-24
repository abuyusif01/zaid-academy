import * as yup from "yup";

const personalSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  whatsapp: yup.string().required("whatsapp number is required"),
  phone: yup.string().required("phone number is required"),
  language: yup.string().required("language is required"),
  gender: yup.string().required("gender is required"),
});

export default personalSchema;
