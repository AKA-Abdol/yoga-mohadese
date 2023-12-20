import { Persian2English } from "src/utils/convertors";
import { ILoginFormValues, ISignupFormValues } from "./types";

export const signupFormValues2Api = (signupFormValues: ISignupFormValues) => ({
  firstname: signupFormValues.firstName,
  lastname: signupFormValues.lastName,
  username: signupFormValues.username.toLowerCase(),
  password: signupFormValues.password,
  email: signupFormValues.email === "" ? undefined : signupFormValues.email,
  phone: Persian2English(signupFormValues.phoneNumber),
});

export const loginFormValues2Api = (loginFormValues: ILoginFormValues) => ({
  validator: loginFormValues.username.toLowerCase(),
  password: loginFormValues.password,
});
