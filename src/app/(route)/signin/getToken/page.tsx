"use client";
import { ACCESS_TOKEN } from "@/app/_const/const";
import cookie from "@/app/_utils/cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GetToken() {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      const query = new URLSearchParams(window.location.search);
      const accessToken = query.get("accessToken");
      if (accessToken) {
        cookie.set(ACCESS_TOKEN, accessToken);
        router.push("/");
      }
    }
  }, [router]);

  return <></>;
}
