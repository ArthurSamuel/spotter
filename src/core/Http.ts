/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type { IAuth } from "../api/auth/auth.type";

interface IRequest {
  url: string;
  data?: any;
  params?: any;
}

export const apiInstance = axios.create({
  timeout: 6000,
});

apiInstance.interceptors.request.use(async (config) => {
  const tokenRaw = localStorage.getItem(import.meta.env.VITE_KEY_TOKEN);
  if (tokenRaw) {
    const token: IAuth = JSON.parse(tokenRaw);
    if (token && token.access_token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }
  }

  config.headers["Content-Type"] = "application/x-www-form-urlencoded";
  return config;
});

apiInstance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (err: any) => {
    return Promise.reject(err);
  }
);

const get = <T = any>({ url, params }: IRequest) => {
  let urlTarget = url;
  if (params) {
    urlTarget += "?";
    Object.keys(params).forEach((item) => {
      if (params[item]) {
        urlTarget += `${item}=${params[item]}&`;
      }
    });
    urlTarget = urlTarget.substring(0, urlTarget.length - 1);
  }
  return apiInstance.get<T>(urlTarget);
};

const post = <T = any>({ url, data }: IRequest) => {
  return apiInstance.post<T>(url, data);
};

const Http = {
  get,
  post,
};

export default Http;
