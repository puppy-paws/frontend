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
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id,
    queryKey: ["dogstagramPostList"],
    queryFn: getDogStagramPostList,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { data, fetchNextPage, hasNextPage, isFetching };
};
