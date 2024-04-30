import { getStarDogPostList } from "@/app/_apis/dogStagram/getStarDogPostList";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { StarDogStagramPostListType } from "@/app/_types/dogStagram";
import { QueryKey, useQuery } from "@tanstack/react-query";

export const useGetStarDogStagramPostList = () => {
  const { data: starDogStagramPostList } = useQuery<
    StarDogStagramPostListType[],
    Object,
    StarDogStagramPostListType[],
    QueryKey
  >({
    queryKey: [QUERY_KEYS.GET_STAR_DOGSTAGRAM_POST_LIST],
    queryFn: getStarDogPostList,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { starDogStagramPostList };
};
