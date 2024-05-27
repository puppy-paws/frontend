import { useEffect } from "react";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { getDogStagramPostList } from "../../_apis/dogStagram/getDogStagramPostList";
import { useSetRecoilState } from "recoil";
import { dogStagramPostListState } from "@/app/_store/dogstagram/atoms";

export const useGetDogStagramPostList = (searchDogType: string) => {
  const setDogStagramPostList = useSetRecoilState(dogStagramPostListState);

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
      const pageSize = lastPage.length + (allPages.length - 1) * 10;
      return pageSize;
    },
    queryKey: [QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST, searchDogType],
    queryFn: ({ pageParam = 0 }) =>
      getDogStagramPostList({ pageParam, searchDogType }),

    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  useEffect(() => {
    if (dogStagramPostList) {
      setDogStagramPostList(dogStagramPostList.pages.flat());
    }
  }, [dogStagramPostList, setDogStagramPostList]);

  return { dogStagramPostList, fetchNextPage, hasNextPage, isFetching };
};
