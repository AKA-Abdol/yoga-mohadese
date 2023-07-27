import axios, { AxiosError } from "axios";
import { tokenPersistor } from "../persistors/auth";
import { UNKNOWN_ERROR } from "./errors";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2000,
});

instance.interceptors.request.use((config) => {
  const token = tokenPersistor.get();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const post = <T, O>(
  url: string,
  local2api: (local: T) => any = (local: T) => local,
  api2local: (api: any) => O = (api: any) => api
) => {
  return async (body: T) => {
    try {
      const response = await instance.post(url, local2api(body));
      return api2local(response.data) as O;
    } catch (e) {
      const error = e as AxiosError;
      return Promise.reject(error.response?.data ?? UNKNOWN_ERROR);
    }
  };
};

const get = <O>(
  url: string,
  api2local: (api: any) => O = (api) => api,
  queryParams: any = {}
) => {
  return async () => {
    try {
      const response = await instance.get(url, { params: queryParams });
      return api2local(response.data) as O;
    } catch (e) {
      const error = e as AxiosError;
      return Promise.reject(error.response?.data ?? UNKNOWN_ERROR);
    }
  };
};

const api = {
  get,
  post,
};

export default api;
