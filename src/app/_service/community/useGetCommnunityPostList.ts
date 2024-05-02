import { useEffect } from "react";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { CommunityPostListType } from "@/app/_types/community";
import { getCommunityPostList } from "@/app/_apis/community/getCommunityPostList";
import { communityPostListState } from "@/app/_store/community/atoms";

export const useGetCommnunityPostList = () => {
  const [, setCommunityPostList] = useRecoilState(communityPostListState);
  const {
    data: communityPostList,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<
    CommunityPostListType[],
    Object,
    InfiniteData<CommunityPostListType[]>,
    QueryKey,
    number
  >({
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const pageSize = lastPage.length + (allPages.length - 1) * 8;
      return pageSize;
    },
    queryKey: [QUERY_KEYS.GET_COMMUNITY_POST_LIST],
    queryFn: getCommunityPostList,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  useEffect(() => {
    if (communityPostList) {
      setCommunityPostList(communityPostList?.pages?.flat());
    }
  }, [communityPostList, setCommunityPostList]);

  return { communityPostList, fetchNextPage, hasNextPage, isFetching };
};
