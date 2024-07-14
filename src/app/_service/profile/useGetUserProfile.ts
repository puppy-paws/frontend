import { getUserProfile } from "./../../_apis/profile/getUserProfile";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { ProfileAllInfo } from "@/app/_types/profile";

export const useGetUserProfile = () => {
  const { data: userProfile } = useQuery<
    ProfileAllInfo | null,
    unknown,
    ProfileAllInfo,
    QueryKey
  >({
    queryKey: [`${QUERY_KEYS.GET_USER_PROFILE}`],
    queryFn: getUserProfile,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { userProfile };
};
