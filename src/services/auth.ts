import { ILoginFormValues } from "../pages/Auth/types";
import api from "./api";
import { LOGIN_URL } from "./auth.data";

export const postLogin = async (loginFormValues: ILoginFormValues) => {
  const response = await api.post(LOGIN_URL, loginFormValues);
  return response.data;
};
