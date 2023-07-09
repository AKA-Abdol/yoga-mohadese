import { Persian2English } from "../../types/utils/converts";
import { isPersianPhoneNumber } from "../../types/utils/validations";
import * as Yup from "yup";

export interface AuthFormProps {
  onToggleAuth: () => void;
}

export interface ILoginFormValues {
  username: string;
  password: string;
}

export interface ISignupFormValues extends ILoginFormValues {
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const LoginFormValidationSchema = {
  username: Yup.string()
    .min(2, "حداقل ۲ کاراکتر")
    .max(50, "حداکثر ۵۰ کاراکتر")
    .required("الزامی"),
  password: Yup.string().required("الزامی"),
};
const YupLoginFormValidationSchema = Yup.object().shape(
  LoginFormValidationSchema
);

const SignupFormValidationSchema = {
  ...LoginFormValidationSchema,
  firstName: Yup.string().required("الزامی"),
  lastName: Yup.string().required("الزامی"),
  phoneNumber: Yup.string().test("phoneCheck", "معتبر نیست", (val) =>
    val === undefined || val === ""
      ? true
      : isPersianPhoneNumber(Persian2English(val))
  ),
  email: Yup.string().email("معتبر نیست"),
  passwordConfirm: Yup.string().required("الزامی"),
};
const YupSignupFormValidationSchema = Yup.object().shape(
  SignupFormValidationSchema
);

export {
  YupLoginFormValidationSchema as LoginFormValidationSchema,
  YupSignupFormValidationSchema as SignupFormValidationSchema,
};
