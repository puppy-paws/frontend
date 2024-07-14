import { fetchFormData } from "./../commonsApi";
import { API_URL } from "@/app/_const/url";

export const postDogStagramPostLike = async (postId: number) => {
  try {
    const response = await fetchFormData(
      `${API_URL.POST.DOGSTAGRAM_POST_LIKE}/${postId}`,
      {
        method: "POST",
      }
    );

    return response;
  } catch (error) {
    console.error("dogstagram post like failed", error);
    throw error;
  }
};
