/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL as string;

export const createAxiosInstance = (contentType: string) => {
  const instance = axios.create({
    headers: {
      "Content-Type": contentType,
      Accept: "application/json",
    },
    withCredentials: true,
  });

  return instance;
};

export const axiosInstance = createAxiosInstance("application/json");
export const axiosInstanceFile = createAxiosInstance("multipart/form-data");
