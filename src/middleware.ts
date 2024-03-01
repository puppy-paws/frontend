import { NextResponse } from "next/server";

export async function middleware() {
  return NextResponse.redirect("http://localhost:3000/community");
}

export const config = {
  matcher: ["/"],
};
