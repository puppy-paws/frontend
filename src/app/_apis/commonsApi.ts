import { API_URL } from "@/app/_const/url";
import { ACCESS_TOKEN } from "@/app/_const/const";
import returnFetch, { ReturnFetch } from "return-fetch";
import token from "../_utils/token";

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
    Authorization: `Bearer ${token.get(ACCESS_TOKEN)}`,
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
    Authorization: `Bearer ${token.get(ACCESS_TOKEN)}`,
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
      // 차후에 스토리지에 있는 토큰을 가져와야함
      Authorization: `Bearer ${token.get(ACCESS_TOKEN)}`,
    },
    ...args,
    interceptors: {
      response: async (response, requestArgs, fetch) => {
        console.log(response);
        if (response.status === 400 || response.status === 401) {
          token.clean(ACCESS_TOKEN);
          // 추가적으로 로그아웃 필요 로직있으면 추가
        }

        if (response.status === 200) {
          const refreshToken = await response.json();
          token.set(ACCESS_TOKEN, refreshToken.accessToken);
        }
        return fetch(...requestArgs);
      },
    },
  });

export const getRefreshToken = returnFetchRetry({
  baseUrl: `${process.env.NEXT_PUBLIC_OAUTH2_BASE_URL}/`,
});
