import { API_URL } from "@/app/_const/url";
import { EditDogStagramPost } from "@/app/_types/dogStagram";
import { fetchExtended } from "../commonsApi";

export const patchDogStagramPost = async (
  requestData: EditDogStagramPost,
  postId: number
): Promise<any> => {
  try {
    const response = await fetchExtended(
      `${API_URL.PATCH.DOGSTAGRAM}/${postId}`,
      {
        method: "PATCH",
        body: JSON.stringify(requestData),
      }
    );

    return response;
  } catch (error) {
    console.error("DogStagram patch failed", error);
    throw error;
  }
};
