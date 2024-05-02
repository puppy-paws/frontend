import { API_URL } from "@/app/_const/url";
import { CommunityPostListType } from "@/app/_types/community";
import { fetchExtended } from "../commonsApi";

type Props = { pageParam?: number };

export const getCommunityPostList = async ({
  pageParam,
}: Props): Promise<CommunityPostListType[]> => {
  try {
    const response = await fetchExtended(
      `${API_URL.GET.community}?take=10&skip=${pageParam}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching Community post list:", error);
    throw error;
  }
};
