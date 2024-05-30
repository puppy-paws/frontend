import { API_URL } from "@/app/_const/url";
import { fetchExtended } from "../commonsApi";

export const deleteCommunityPost = async (
  communityId: number
): Promise<Response> => {
  try {
    const response = await fetchExtended(
      `${API_URL.PUT.COMMUNITY}/${communityId}`,
      {
        method: "DELETE",
      }
    );

    return response;
  } catch (error) {
    console.error("Community delete failed", error);
    throw error;
  }
};
