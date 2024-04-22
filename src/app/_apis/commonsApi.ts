import returnFetch from "return-fetch";

export const fetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { Accept: "application/json" },
  interceptors: {
    // request: async (args) => {
    //   return args;
    // },

    response: async (response) => {
      return response;
    },
  },
});
