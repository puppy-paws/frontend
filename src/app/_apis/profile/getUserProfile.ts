import { API_URL } from "../../_const/url";
import { fetchExtended } from "../commonsApi";
import { ProfileAllInfo } from "@/app/_types/profile";
import { ACCESS_TOKEN } from "@/app/_const/const";
import cookie from "@/app/_utils/cookie";

export const getUserProfile = async (): Promise<ProfileAllInfo | null> => {
  try {
    if (!cookie.get(ACCESS_TOKEN)) return null;
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
