import { API_URL } from "./../../_const/url";
import { StarDogStagramPostListType } from "@/app/_types/dogStagram";
import { fetchExtended } from "../commonsApi";

export const getStarDogPostList = async (): Promise<
  StarDogStagramPostListType[]
> => {
  try {
    const response = await fetchExtended(API_URL.GET.STAR_DOGSTGRAM, {
      method: "GET",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching StarDogStagram post list:", error);
    throw error;
  }
};
