import { getStarDogPostList } from "@/app/_apis/dogStagram/getStarDogPostList";
import { StarDogStagramPostListType } from "@/app/_types/dogStagram";
import { QueryKey, useQuery } from "@tanstack/react-query";

export const useGetStarDogStagramPostList = () => {
  const { data: starDogStagramPostList } = useQuery<
    StarDogStagramPostListType[],
    Object,
    StarDogStagramPostListType[],
    QueryKey
  >({
    queryKey: ["starDogstagramPostList"],
    queryFn: getStarDogPostList,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { starDogStagramPostList };
};
