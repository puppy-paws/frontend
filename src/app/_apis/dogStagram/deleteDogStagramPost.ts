import { fetchExtended } from "@/app/_apis/commonsApi";
import { API_URL } from "@/app/_const/url";

export const deleteDogStagramPost = async (postId: number) => {
  try {
    const response = await fetchExtended(
      `${API_URL.DELETE.DOGSTAGRAM}/${postId}`,
      {
        method: "DELETE",
      }
    );

    return response;
  } catch (error) {
    console.error("DogStagram delete failed", error);
    throw error;
  }
};
