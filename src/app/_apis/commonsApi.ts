import { API_URL } from "@/app/_const/url";
import { ACCESS_TOKEN } from "@/app/_const/const";
import returnFetch, { ReturnFetch } from "return-fetch";
import cookie from "../_utils/cookie";

import { Socket, io } from "socket.io-client";

const socket: Socket = io(`${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}`, {
  transports: ["websocket"],
});

export const noAuthfetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

export const fetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookie.get(ACCESS_TOKEN)}`,
  },
  interceptors: {
    response: async (response) => {
      if (response.status === 401) {
        try {
          await getRefreshToken(`${API_URL.GET.REFRESH_TOKEN}`);
        } catch (error) {
          console.error("토큰 에러", error);
          throw error;
        }
      }
      return response;
    },
  },
});

export const fetchFormData = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "multipart/form-data",
    Authorization: `Bearer ${cookie.get(ACCESS_TOKEN)}`,
  },
  interceptors: {
    response: async (response) => {
      if (response.status === 401) {
        try {
          await getRefreshToken(`${API_URL.GET.REFRESH_TOKEN}`);
        } catch (error) {
          console.error("토큰 에러", error);
          throw error;
        }
      }

      return response;
    },
  },
});

const returnFetchRetry: ReturnFetch = (args) =>
  returnFetch({
    headers: {
      Authorization: `Bearer ${cookie.get(ACCESS_TOKEN)}`,
    },
    ...args,
    interceptors: {
      response: async (response, requestArgs, fetch) => {
        if (response.status === 400 || response.status === 401) {
          cookie.remove(ACCESS_TOKEN);
          socket.on("disconnect", () => {
            console.log("disconnect to WebSocket server");
          });
          window.location.href = "/signin";
        }

        if (response.status === 200) {
          const refreshToken = await response.json();
          cookie.set(ACCESS_TOKEN, refreshToken.accessToken);
        }
        return fetch(...requestArgs);
      },
    },
  });

export const getRefreshToken = returnFetchRetry({
  baseUrl: `${process.env.NEXT_PUBLIC_OAUTH2_BASE_URL}/`,
});
