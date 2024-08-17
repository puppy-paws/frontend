import { fetchExtended } from "@/app/_apis/commonsApi";
import { API_URL } from "./../../_const/url";
import { StarDogStagramPostListType } from "@/app/_types/dogStagram";
import { noAuthfetchExtended } from "../commonsApi";
import { ACCESS_TOKEN } from "@/app/_const/const";
import cookie from "@/app/_utils/cookie";

const fetchDogStagramPostList = async (url: string): Promise<StarDogStagramPostListType[]> => {
  try {
    const fetchFunction = cookie.get(ACCESS_TOKEN) ? fetchExtended : noAuthfetchExtended;
    const response = await fetchFunction(url, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching DogStagram post list:", error);
    throw error;
  }
};

export const getStarDogPostList = async (): Promise<StarDogStagramPostListType[]> => {
  const url = API_URL.GET.STAR_DOGSTGRAM;
  return fetchDogStagramPostList(url);
};