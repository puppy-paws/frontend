import { QUERY_KEYS } from "@/app/_const/queryKey";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { ProfileAllInfo } from "@/app/_types/profile";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useIsMySelfPost = (userId: string) => {
  const queryClient = useQueryClient();
  const [myId, setMyId] = useState(-1);
  const isMyself = myId === +userId ? true : false;
  const userProfile = useGetUserProfile();
  const getUserProfileInfo = queryClient.getQueryData<ProfileAllInfo>([
    QUERY_KEYS.GET_USER_PROFILE,
  ]);

  useEffect(() => {
    const profileData =
      getUserProfileInfo?.member || userProfile.userProfile?.member;

    if (profileData) {
      setMyId(profileData.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserProfileInfo]);

  return isMyself;
};
