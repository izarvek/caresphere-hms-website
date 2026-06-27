import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig,} from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: { "Content-Type": "application/json", },
});

let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;

interface RetryRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// --------------------
// Request Interceptor
// --------------------

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// --------------------
// Refresh Token Helper
// --------------------

const refreshAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    `${API_URL}/auth/refresh`,
    {},
    {
      withCredentials: true,
    },
  );

  const accessToken = response.data.accessToken;

  localStorage.setItem("accessToken", accessToken);

  return accessToken;
};

// --------------------
// Response Interceptor
// --------------------

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryRequestConfig;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        if (!isRefreshing) {
          isRefreshing = true;

          refreshPromise = refreshAccessToken();

          const newAccessToken = await refreshPromise;

          isRefreshing = false;
          refreshPromise = null;

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return api(originalRequest);
        }

        if (refreshPromise) {
          const newAccessToken = await refreshPromise;

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return api(originalRequest);
        }
      } catch {
        isRefreshing = false;
        refreshPromise = null;

        localStorage.removeItem("accessToken");

        if (typeof window !== "undefined") {
          window.location.replace("/login");
        }

        return Promise.reject(error);
      }
    }

    switch (error.response?.status) {
      case 403:
        console.error("Forbidden");
        break;

      case 500:
        console.error("Internal Server Error");
        break;

      default:
        break;
    }

    return Promise.reject(error);
  },
);