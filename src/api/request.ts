// import { errorToast } from "@/utils";
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class AxiosSingleton {
  private static instance: AxiosInstance | null = null;

  private constructor() {}

  public static getInstance(config?: AxiosRequestConfig): AxiosInstance {
    if (!AxiosSingleton.instance) {
      AxiosSingleton.instance = AxiosSingleton.createInstance(config);
    }
    return AxiosSingleton.instance;
  }

  private static createInstance(config?: AxiosRequestConfig): AxiosInstance {
    const instance = axios.create({
      baseURL: "https://linkup.zeabur.app",
      timeout: 5000, //超时配置
      withCredentials: true, //跨域携带cookie
      headers: {
        // 跨域

        "Access-Control-Allow-Origin": "*",

        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",

        "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",

        "Access-Control-Expose-Headers": "X-Total-Count",
      },
      ...config, // 自定义配置覆盖基本配置
    });

    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config: any) {
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        // errorToast("请求错误");
        console.log("error:", error);

        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response: AxiosResponse) {
        // 对响应数据做点什么
        const { code, data, message } = response.data;
        console.log(response, 'full response');
         
        if (code === 200) return data;
        else if (code === 500) {
          // errorToast(message);
          console.log(message);

          return Promise.reject(response.data);
        } else {
          // errorToast(message);
          console.log(message);

          return Promise.reject(response.data);
        }
      },
      function (error) {
        // 对响应错误做点什么
        // errorToast("响应错误");
        console.log("error:", error);

        return Promise.reject(error);
      }
    );

    return instance;
  }
}

const request = AxiosSingleton.getInstance();

export { request };
