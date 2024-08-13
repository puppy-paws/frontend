// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { ACCESS_TOKEN } from "./app/_const/const";
import cookie from "@/app/_utils/cookie";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const baseUrl = request.nextUrl.origin;
  const isHasAccessToken = request.cookies.has(ACCESS_TOKEN);
  const currentPathName = request.nextUrl.pathname;

  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const rootUrl = {
    matcher: ["/"],
  };

  const needAccessTokenUrl = {
    matcher: ["/profile", "/chatting", "edit", "delete", "writing"],
  };

  const isNeedAccessTokenUrlMatcher = needAccessTokenUrl.matcher.some(
    (substring) => currentPathName.includes(substring)
  );

  if (rootUrl.matcher.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(`${baseUrl}/community`);
  }

  if (isNeedAccessTokenUrlMatcher && !isHasAccessToken) {
    return NextResponse.redirect(`${baseUrl}/signin`);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
