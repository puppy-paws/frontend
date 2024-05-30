import { deleteCommunityPost } from "@/app/_apis/community/deleteCommunityPost";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { ProfileAllInfo } from "@/app/_types/profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useDeleteCommunityPost = (communityId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (): Promise<Response> => {
      const data = await deleteCommunityPost(communityId);
      return data;
    },
    onSuccess: () => {
      router.push("/community");
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.setQueryData<ProfileAllInfo>(
        [QUERY_KEYS.GET_COMMUNITY_POST_LIST],
        context?.previousTodos
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_COMMUNITY_POST_LIST],
      });
    },
  });
};
