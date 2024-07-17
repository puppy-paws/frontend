import {
  setCookie,
  getCookie,
  deleteCookie,
  CookieValueTypes,
} from "cookies-next";

const cookie = {
  get: (key: string): CookieValueTypes => {
    return getCookie(key);
  },

  set: (key: string, value: string) => {
    setCookie(key, value);
  },

  remove: (key: string) => {
    deleteCookie(key);
  },
};

export default cookie;
