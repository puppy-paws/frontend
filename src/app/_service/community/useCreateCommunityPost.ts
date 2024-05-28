import { postCommunityPost } from "@/app/_apis/community/postCommunityPost";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreateCommunityPost {
  pickup_location: string;
  pickup_date: Date;
  description: string;
}

export const useCreateCommunityPost = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateCommunityPost, unknown, CreateCommunityPost>({
    mutationFn: async (
      requestBody: CreateCommunityPost
    ): Promise<CreateCommunityPost> => {
      const data = await postCommunityPost(requestBody);
      return data;
    },
    onMutate: () => {
      // API 요청이 성공했을 경우를 가정하고, 데이터를 가공해 화면을 업데이트
    },
    onSuccess: (data) => {
      console.log(data);
      // mutation이 성공적으로 완료되면 호출
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.setQueryData<CreateCommunityPost[]>(
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
  // mutation option 수정 예정
};
