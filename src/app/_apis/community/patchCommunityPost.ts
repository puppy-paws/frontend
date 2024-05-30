import { API_URL } from "@/app/_const/url";
import { PostEditingInfo } from "@/app/_types/community";
import { fetchExtended } from "../commonsApi";

export const patchCommunityPost = async (
  requestData: PostEditingInfo,
  communityId: number
): Promise<any> => {
  try {
    const response = await fetchExtended(
      `${API_URL.PUT.COMMUNITY}/${communityId}`,
      {
        method: "PATCH",
        body: JSON.stringify(requestData),
      }
    );

    return response;
  } catch (error) {
    console.error("Community patch failed", error);
    throw error;
  }
};
