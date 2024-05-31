import { fetchFormData } from "./../commonsApi";
import { API_URL } from "@/app/_const/url";

export const postDogStagramPost = async (requestBody: FormData) => {
  try {
    const response = await fetchFormData(API_URL.POST.DOGSTAGRAM, {
      method: "POST",
      body: requestBody,
    });

    return response;
  } catch (error) {
    console.error("dogstagram post creation failed", error);
    throw error;
  }
};
