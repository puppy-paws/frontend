import { QUERY_KEYS } from "@/app/_const/queryKey";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { ProfileAllInfo } from "@/app/_types/profile";
import { getOtherUserProfile } from "@/app/_apis/profile/getOtherUserProfile";

export const useGetOtherUserProfile = (otherUserProfileId: number) => {
  const { data: otherUserProfile } = useQuery<
    ProfileAllInfo,
    unknown,
    ProfileAllInfo,
    QueryKey
  >({
    queryKey: [`${QUERY_KEYS.GET_OTHER_USER_PROFILE}`],
    queryFn: () => getOtherUserProfile(otherUserProfileId),
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { otherUserProfile };
};
