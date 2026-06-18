import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Unauthorized");

          localStorage.removeItem("token");

          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          break;

        case 403:
          console.error("Forbidden");
          break;

        case 500:
          console.error("Server Error");
          break;

        default:
          console.error(error.response.data);
      }
    }

    return Promise.reject(error);
  }
);