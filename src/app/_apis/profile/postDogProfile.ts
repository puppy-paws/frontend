import { API_URL } from "@/app/_const/url";
import { fetchFormData } from "../commonsApi";

export const postDogProfile = async (requestBody: FormData) => {
  try {
    const response = await fetchFormData(API_URL.POST.DOG_PROFILE, {
      method: "POST",
      body: requestBody,
    });

    return response;
  } catch (error) {
    console.error("Dog profile put failed", error);
    throw error;
  }
};
