import { API_URL } from "../../_const/url";
import { fetchExtended } from "../commonsApi";
import { ProfileAllInfo } from "@/app/_types/profile";
import { ACCESS_TOKEN } from "@/app/_const/const";
import token from "@/app/_utils/token";

export const getUserProfile = async (): Promise<ProfileAllInfo | null> => {
  const isSupported =
    typeof window !== "undefined" && window.localStorage !== null;

  try {
    if (isSupported) return null;
    if (token.get(ACCESS_TOKEN) === null) return null;
    const response = await fetchExtended(API_URL.GET.PROFILE, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
    throw error;
  }
};
