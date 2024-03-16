import axios, { AxiosRequestConfig } from 'axios';

const axiosServices = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:3010/' });

axiosServices.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !window.location.href.includes('/login')) {
      window.location.pathname = '/login';
    }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export default axiosServices;

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosServices.get(url, { ...config });

  return res.data;
};

export const fetcherPost = async (url: string, data: any, config?: AxiosRequestConfig) => {
  const res = await axiosServices.post(url, data, config);
  return res.data;
};

export const fetcherPut = async (url: string, data: any, config?: AxiosRequestConfig) => {
  const res = await axiosServices.put(url, data, config);
  return res.data;
};

export const fetcherPatch = async (url: string, data: any, config?: AxiosRequestConfig) => {
  const res = await axiosServices.patch(url, data, config);
  return res.data;
};

export const fetcherDelete = async (url: string, config?: AxiosRequestConfig) => {
  const res = await axiosServices.delete(url, config);
  return res.data;
};
