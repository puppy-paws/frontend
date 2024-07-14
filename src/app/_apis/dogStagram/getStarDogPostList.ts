import { fetchExtended } from "@/app/_apis/commonsApi";
import { API_URL } from "./../../_const/url";
import { StarDogStagramPostListType } from "@/app/_types/dogStagram";
import { noAuthfetchExtended } from "../commonsApi";
import { ACCESS_TOKEN } from "@/app/_const/const";
import token from "@/app/_utils/token";

export const getStarDogPostList = async (): Promise<
  StarDogStagramPostListType[]
> => {
  try {
    if (token.get(ACCESS_TOKEN) !== null) {
      const response = await fetchExtended(API_URL.GET.STAR_DOGSTGRAM, {
        method: "GET",
      });

      const data = await response.json();
      return data;
    } else {
      const response = await noAuthfetchExtended(API_URL.GET.STAR_DOGSTGRAM, {
        method: "GET",
      });

      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error fetching StarDogStagram post list:", error);
    throw error;
  }
};
