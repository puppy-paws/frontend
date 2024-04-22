import { DogStagramPostListType } from "@/app/_types/dogStagram";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getDogStagramPostList } from "../../_apis/dogStagram/getDogStagramPostList";

export const useGetDogStagramPostList = () => {
  const { data: dogStagramPostList } = useQuery<
    DogStagramPostListType[],
    Object,
    DogStagramPostListType[],
    QueryKey
  >({
    queryKey: ["dogstagramPostList"],
    queryFn: getDogStagramPostList,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { dogStagramPostList };
};
