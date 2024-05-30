import { patchCommunityPost } from "@/app/_apis/community/patchCommunityPost";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { PostEditingInfo } from "@/app/_types/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useEditCommunityPost = (communityId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<PostEditingInfo, unknown, PostEditingInfo>({
    mutationFn: async (
      requestBody: PostEditingInfo
    ): Promise<PostEditingInfo> => {
      const data = await patchCommunityPost(requestBody, communityId);
      return data;
    },
    onMutate: () => {
      // API 요청이 성공했을 경우를 가정하고, 데이터를 가공해 화면을 업데이트
    },
    onSuccess: (data) => {
      router.push(`/community/${communityId}`);
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.setQueryData<PostEditingInfo[]>(
        [`${QUERY_KEYS.GET_COMMUNITY_POST_LIST}/${communityId}`],
        context?.previousTodos
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [`${QUERY_KEYS.GET_COMMUNITY_POST_LIST}/${communityId}`],
      });
    },
  });
};
