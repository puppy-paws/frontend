import { fetchExtended } from "@/app/_apis/commonsApi";
import { API_URL } from "@/app/_const/url";

export const deleteDogProfile = async () => {
  try {
    const response = await fetchExtended(API_URL.POST.DOG_PROFILE, {
      method: "DELETE",
    });

    return response;
  } catch (error) {
    console.error("Dog profile delete failed", error);
    throw error;
  }
};
