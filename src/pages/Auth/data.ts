import { ILoginFormValues, ISignupFormValues } from "./types";

export const LoginInitialValues: ILoginFormValues = {
  password: "",
  username: "",
};

export const SignupInitialValues: ISignupFormValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  username: "",
  password: "",
  passwordConfirm: "",
};
