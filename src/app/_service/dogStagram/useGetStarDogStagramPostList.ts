import { getStarDogPostList } from "@/app/_apis/dogStagram/getStarDogPostList";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { starDogStagramPostListState } from "@/app/_store/dogstagram/atoms";
import { StarDogStagramPostListType } from "@/app/_types/dogStagram";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useGetStarDogStagramPostList = () => {
  const [, setStarDogStagramPostList] = useRecoilState(
    starDogStagramPostListState
  );

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

  useEffect(() => {
    if (starDogStagramPostList) {
      setStarDogStagramPostList(starDogStagramPostList?.flat());
    }
  }, [starDogStagramPostList, setStarDogStagramPostList]);

  return { starDogStagramPostList };
};
