import storage from "./localStorage";

const isSupported =
  typeof window !== "undefined" && window.localStorage !== null;

const token = {
  get: (tokenType: string) => {
    if (isSupported) return "";
    return storage.get<string>(tokenType);
  },

  set: (tokenType: string, newTokenValue: string) => {
    if (isSupported) {
      storage.set(tokenType, newTokenValue);
    }
  },

  clean: (tokenType: string) => {
    if (isSupported) {
      storage.remove(tokenType);
    }
  },
};

export default token;
