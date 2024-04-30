import { API_URL } from "@/app/_const/url";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import { fetchExtended } from "../commonsApi";

type Props = { pageParam?: number };

export const getDogStagramPostList = async ({
  pageParam,
}: Props): Promise<DogStagramPostListType[]> => {
  try {
    const response = await fetchExtended(
      `${API_URL.GET.dogStagram}?take=10&skip=${pageParam}`,
      {
        method: "GET",
      }
    );
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching DogStagram post list:", error);
    throw error;
  }
};
