import { ISignupFormValues } from "./types";

export const signupFormValues2api = (signupFormValues: ISignupFormValues) => ({
    firstname: signupFormValues.firstName,
    lastname: signupFormValues.lastName,
    username: signupFormValues.username,
    password: signupFormValues.password,
    email: signupFormValues.email,
    phone: +signupFormValues.phoneNumber,
  });
  