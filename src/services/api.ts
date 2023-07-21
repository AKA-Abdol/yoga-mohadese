import axios from "axios";
import { tokenPersistor } from "../persistors/auth";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2000,
});

instance.interceptors.request.use((config) => {
  const token = tokenPersistor.get();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const api = {
  get: instance.get,
  post: instance.post,
  patch: instance.patch,
  delete: instance.delete,
};

export default api;
