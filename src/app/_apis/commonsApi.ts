import returnFetch from "return-fetch";

export const fetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { Accept: "application/json" },
  interceptors: {
    response: async (response) => {
      return response;
    },
  },
});
