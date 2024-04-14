import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, () => {
    return HttpResponse.json({
      data: {
        name: "kimjiwoo",
      },
    });
  }),
];
