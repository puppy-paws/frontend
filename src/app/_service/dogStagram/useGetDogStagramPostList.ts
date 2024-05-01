import { useEffect } from "react";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { dogStagramPostListState } from "@/app/_store/dogstagram/dogStagramPostListState";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { getDogStagramPostList } from "../../_apis/dogStagram/getDogStagramPostList";
import { useRecoilState } from "recoil";

export const useGetDogStagramPostList = () => {
  const [, setDogStagramPostList] = useRecoilState(dogStagramPostListState);
  const {
    data: dogStagramPostList,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<
    DogStagramPostListType[],
    Object,
    InfiniteData<DogStagramPostListType[]>,
    QueryKey,
    number
  >({
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const pageSize = lastPage.length + (allPages.length - 1) * 8;
      return pageSize;
    },
    queryKey: [QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST],
    queryFn: getDogStagramPostList,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  useEffect(() => {
    if (dogStagramPostList) {
      setDogStagramPostList(dogStagramPostList?.pages?.flat());
    }
  }, [dogStagramPostList, setDogStagramPostList]);

  return { dogStagramPostList, fetchNextPage, hasNextPage, isFetching };
};
