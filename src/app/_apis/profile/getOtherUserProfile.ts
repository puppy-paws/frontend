import { API_URL } from "@/app/_const/url";
import { ProfileAllInfo } from "@/app/_types/profile";
import { fetchExtended } from "../commonsApi";

export const getOtherUserProfile = async (
  id: number
): Promise<ProfileAllInfo> => {
  try {
    const response = await fetchExtended(
      `${API_URL.GET.OTHER_USER_PROFILE}/${id}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching other user profile:", error);
    throw error;
  }
};
