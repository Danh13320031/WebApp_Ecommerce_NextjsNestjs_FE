import { store } from "@/store";
import { clearAuth, setAccessToken } from "@/store/slices/auth.slice";
import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { authService } from "./auth.service";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (config) => {
    const state = store.getState().auth;
    const token = state.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === StatusCodes.UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const state = store.getState();
      const refreshToken = state.auth.refreshToken;

      if (refreshToken) {
        const newAccessToken = await authService.refreshToken(refreshToken);

        if (newAccessToken) {
          store.dispatch(setAccessToken(newAccessToken));
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return apiClient(originalRequest);
        }
      }

      store.dispatch(clearAuth());

      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    }

    return Promise.reject(error);
  },
);
