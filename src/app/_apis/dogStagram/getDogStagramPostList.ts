import { ACCESS_TOKEN } from "@/app/_const/const";
import { API_URL } from "@/app/_const/url";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import token from "@/app/_utils/token";
import { noAuthfetchExtended, fetchExtended } from "../commonsApi";

interface Props {
  pageParam?: number;
  searchDogType?: string;
}

export const getDogStagramPostList = async ({
  pageParam,
  searchDogType,
}: Props): Promise<DogStagramPostListType[]> => {
  const isSupported =
    typeof window !== "undefined" && window.localStorage !== null;

  try {
    if (isSupported) return [];
    if (token.get(ACCESS_TOKEN) !== null) {
      const response = await fetchExtended(
        `${API_URL.GET.DOGSTAGRAM}/search?search_word=${searchDogType}&take=10&skip=${pageParam}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      return data;
    } else {
      const response = await noAuthfetchExtended(
        `${API_URL.GET.DOGSTAGRAM}/search?search_word=${searchDogType}&take=10&skip=${pageParam}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error fetching DogStagram post list:", error);
    throw error;
  }
};
