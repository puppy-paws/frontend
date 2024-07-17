import { API_URL } from "@/app/_const/url";
import {
  CommunityPostListType,
  SearchCommunityValue,
} from "@/app/_types/community";
import { noAuthfetchExtended } from "../commonsApi";

type Props = { pageParam?: number; searchValues: SearchCommunityValue };

export const getCommunityPostList = async ({
  pageParam,
  searchValues,
}: Props): Promise<CommunityPostListType[]> => {
  const {
    searchDogTypeValue = "",
    selectedAreaOption = "",
    selectedStatusOption = "",
  } = searchValues;

  try {
    const response = await noAuthfetchExtended(
      `${API_URL.GET.COMMUNITY}/search?pickupLocation=${selectedAreaOption}&status=${selectedStatusOption}&dogType=${searchDogTypeValue}&take=10&skip=${pageParam}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching Community post list:", error);
    throw error;
  }
};
