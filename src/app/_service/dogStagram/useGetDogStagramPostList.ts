import { QUERY_KEYS } from "@/app/_const/queryKey";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { getDogStagramPostList } from "../../_apis/dogStagram/getDogStagramPostList";

export const useGetDogStagramPostList = () => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
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

  return { data, fetchNextPage, hasNextPage, isFetching };
};
