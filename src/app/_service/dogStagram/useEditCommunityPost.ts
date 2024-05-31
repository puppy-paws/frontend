import { patchDogStagramPost } from "./../../_apis/dogStagram/patchDogStagramPost";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { PostEditingInfo } from "@/app/_types/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { EditDogStagramPost } from "@/app/_types/dogStagram";

export const useEditDogStagramPost = (postId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<EditDogStagramPost, unknown, EditDogStagramPost>({
    mutationFn: async (
      requestBody: EditDogStagramPost
    ): Promise<EditDogStagramPost> => {
      const data = await patchDogStagramPost(requestBody, postId);
      return data;
    },
    onMutate: () => {
      // API 요청이 성공했을 경우를 가정하고, 데이터를 가공해 화면을 업데이트
    },
    onSuccess: () => {
      router.push(`/dogstagram`);
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.setQueryData<EditDogStagramPost[]>(
        [`${QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST}`],
        context?.previousTodos
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [`${QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST}`],
      });
    },
  });
};
