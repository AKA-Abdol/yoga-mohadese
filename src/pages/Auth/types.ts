import { Persian2English } from "../../utils/converts";
import {
  isPersianPhoneNumber,
  isPersianWord,
  isPhoneNumber,
} from "../../utils/validations";
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

const USERNAME_SCHEMA = /^[a-zA-Z0-9._]+$/;

const LoginFormValidationSchema = {
  username: Yup.string()
    // .min(8, "حداقل ۸ کاراکتر")
    .max(20, "حداکثر ۲۰ کاراکتر")
    .matches(USERNAME_SCHEMA, "نام کاربری فقط انگلیسی و نقطه و خط زیر")
    .required("الزامی"),
  password: Yup.string()
    // .min(8, "حداقل ۸ کاراکتر")
    .required("الزامی"),
};
const YupLoginFormValidationSchema = Yup.object().shape(
  LoginFormValidationSchema
);

const SignupFormValidationSchema = {
  ...LoginFormValidationSchema,
  firstName: Yup.string()
    .test("isAllPersian", "نام باید فارسی باشد", (val) =>
      isPersianWord(val ?? "")
    )
    .required("الزامی"),
  lastName: Yup.string()
    .test("isAllPersian", "نام باید فارسی باشد", (val) =>
      isPersianWord(val ?? "")
    )
    .required("الزامی"),
  phoneNumber: Yup.string()
    .test("phoneCheck", "شماره معتبر نیست", (value) =>
      isPhoneNumber(value ?? "")
    )
    .required("الزامی"),
  email: Yup.string().email("معتبر نیست"),
  passwordConfirm: Yup.string().min(8, "حداقل ۸ کاراکتر").required("الزامی"),
};
const YupSignupFormValidationSchema = Yup.object().shape(
  SignupFormValidationSchema
);

export {
  YupLoginFormValidationSchema as LoginFormValidationSchema,
  YupSignupFormValidationSchema as SignupFormValidationSchema,
};
