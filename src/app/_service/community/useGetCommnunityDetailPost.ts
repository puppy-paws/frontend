import { CommunityDetailPostType } from "./../../_types/community";
import { getCommunityDetailPost } from "./../../_apis/community/getCommunityDetailPost";
import { useEffect } from "react";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { communityDetailPostState } from "@/app/_store/community/atoms";

export const useGetCommnunityDetailPost = (id: number) => {
  const [, setCommunityDetailPost] = useRecoilState(communityDetailPostState);
  const { data: communityDetailPost } = useQuery<
    CommunityDetailPostType,
    unknown,
    CommunityDetailPostType,
    QueryKey
  >({
    queryKey: [`${QUERY_KEYS.GET_COMMUNITY_POST_LIST}/${id}`],
    queryFn: () => getCommunityDetailPost(id),

    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  useEffect(() => {
    if (communityDetailPost) {
      setCommunityDetailPost(communityDetailPost);
    }
  }, [communityDetailPost, setCommunityDetailPost]);

  return { communityDetailPost };
};
