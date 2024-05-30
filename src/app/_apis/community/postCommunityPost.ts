import { API_URL } from "@/app/_const/url";
import { fetchExtended } from "../commonsApi";

export const postCommunityPost = async (requestData: any): Promise<any> => {
  try {
    const response = await fetchExtended(API_URL.POST.COMMUNITY, {
      method: "POST",
      body: JSON.stringify(requestData),
    });

    return response;
  } catch (error) {
    console.error("Community post creation failed", error);
    throw error;
  }
};
