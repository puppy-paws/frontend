import { API_URL } from "../../_const/url";
import { fetchExtended } from "../commonsApi";
import { ProfileAllInfo } from "@/app/_types/profile";

export const getUserProfile = async (): Promise<ProfileAllInfo> => {
  try {
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
