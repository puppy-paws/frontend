import { fetchExtended } from "../commonsApi";

export const postCommunityPost = async (requestData: any): Promise<any> => {
  try {
    const response = await fetchExtended("community", {
      method: "POST",
      body: JSON.stringify(requestData),
    });
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("Community post creation failed", error);
    throw error;
  }
};
