import { ACCESS_TOKEN } from "@/app/_const/const";
import { API_URL } from "@/app/_const/url";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import cookie from "@/app/_utils/cookie";
import { noAuthfetchExtended, fetchExtended } from "../commonsApi";

interface Props {
  pageParam?: number;
  searchDogType?: string;
}

const fetchDogStagramPostList = async (url: string): Promise<DogStagramPostListType[]> => {
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

export const searchDogStagramPostList = async ({
                                                 pageParam,
                                                 searchDogType,
                                               }: Props): Promise<DogStagramPostListType[]> => {
  const url = `${API_URL.GET.DOGSTAGRAM}/search?search_word=${searchDogType}&take=10&skip=${pageParam}`;
  return fetchDogStagramPostList(url);
};

export const getDogStagramPostList = async (): Promise<DogStagramPostListType[]> => {
  const url = `${API_URL.GET.DOGSTAGRAM}`;
  return fetchDogStagramPostList(url);
};