import { API_URL } from "@/app/_const/url";
import { fetchFormData } from "../commonsApi";

export const postUserProfile = async (requestBody: FormData) => {
  try {
    const response = await fetchFormData(API_URL.POST.USER_PROFILE, {
      method: "POST",
      body: requestBody,
    });

    return response;
  } catch (error) {
    console.error("User profile put failed", error);
    throw error;
  }
};
