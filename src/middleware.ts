// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // 첫 번째 미들웨어: 헤더 설정 (SSR 사용 시 경로 추출 사용 목적)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const config = {
    matcher: ["/"],
  };

  // 두 번째 미들웨어: 리다이렉트 설정
  if (config.matcher.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect("http://localhost:3000/community");
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
