import returnFetch, { ReturnFetch } from "return-fetch";

// 헤더에 토큰 담는거랑 안담는거 별개로 두어야함
// 헤더에 토큰 담을때만 401 처리해야함
// 토큰 담는 함수 안담는 함수 이름 명확하게 정할것
export const fetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { Accept: "application/json" },
  interceptors: {
    response: async (response) => {
      // 토큰 값이 만료되면
      if (response.status === 401) {
        try {
          // 리프레쉬 토큰 api를 호출해서
          const response = await getRefreshToken("token/refresh");
          // response로 넘어오는 토큰값을 헤더에 넣기
          // 로직 추가해야함
        } catch (error) {
          // 리프레쉬 토큰 에러 처리
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoiT0FVVEgyX1VTRVIsU0NPUEVfYWNjb3VudF9lbWFpbCxTQ09QRV9wcm9maWxlX25pY2tuYW1lIiwibmFtZSI6IjM0NjMzMzUyMTQiLCJpYXQiOjE3MTUxNTYzNTksImV4cCI6MTcxNTE1NjQxOX0.X1yCn7T69bS3L-9wGae2T-3Mt4pYOCW_qcivYITh4TU`,
    },
    ...args,
    interceptors: {
      response: async (response, requestArgs, fetch) => {
        // 리프레쉬 토큰 처리
        const responseToRefreshCookie = await fetch(
          `${process.env.NEXT_PUBLIC_OAUTH2_BASE_URL}/token/refresh`
        );

        if (
          responseToRefreshCookie.status === 400 ||
          responseToRefreshCookie.status === 401
        ) {
          // 토큰 전부 삭제시키고 로그아웃 처리
          // return response;
        }

        if (responseToRefreshCookie.status === 200) {
          // response로 넘어오는 토큰값 스토리지에 담기 (근데 위에랑 겹쳐서 위에 둘지 밑에 둘지 정해야함)
          return response;
        }

        return fetch(...requestArgs);
      },
    },
  });

export const getRefreshToken = returnFetchRetry({
  baseUrl: `${process.env.NEXT_PUBLIC_OAUTH2_BASE_URL}/`,
});
