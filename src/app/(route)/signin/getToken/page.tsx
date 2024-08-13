"use client";
import { ACCESS_TOKEN, socket } from "@/app/_const/const";
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
        socket.on("connect", () => {
          console.log("Connected to WebSocket server");
        });
        cookie.set(ACCESS_TOKEN, accessToken);
        router.push("/");
      }
    }
  }, [router]);

  return <></>;
}
