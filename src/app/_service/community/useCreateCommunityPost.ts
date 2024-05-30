import { postCommunityPost } from "@/app/_apis/community/postCommunityPost";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { PostWritingInfo } from "@/app/_types/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useCreateCommunityPost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<PostWritingInfo, unknown, PostWritingInfo>({
    mutationFn: async (
      requestBody: PostWritingInfo
    ): Promise<PostWritingInfo> => {
      const data = await postCommunityPost(requestBody);
      return data;
    },
    onMutate: () => {
      // API 요청이 성공했을 경우를 가정하고, 데이터를 가공해 화면을 업데이트
    },
    onSuccess: (data) => {
      router.push("/community");
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.setQueryData<PostWritingInfo[]>(
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
