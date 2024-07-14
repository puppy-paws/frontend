"use client";
import { ACCESS_TOKEN } from "@/app/_const/const";
import storage from "@/app/_utils/localStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GetToken() {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      const query = new URLSearchParams(window.location.search);
      const accessToken = query.get("accessToken");
      if (accessToken) {
        storage.set(ACCESS_TOKEN, accessToken);
        window.history.go(-2);
      }
    }
  }, [router]);

  return <></>;
}
