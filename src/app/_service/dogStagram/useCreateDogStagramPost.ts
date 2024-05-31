import { postDogStagramPost } from "./../../_apis/dogStagram/postDogStagramPost";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { PostDogStagramPost } from "@/app/_types/dogStagram";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useCreateDogStagramPost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<Response, unknown, FormData>({
    mutationFn: async (requestBody: FormData): Promise<Response> => {
      const data = await postDogStagramPost(requestBody);
      return data;
    },
    onMutate: () => {
      // API 요청이 성공했을 경우를 가정하고, 데이터를 가공해 화면을 업데이트
    },
    onSuccess: (data) => {
      router.push("/dogstagram");
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.setQueryData<PostDogStagramPost[]>(
        [QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST],
        context?.previousTodos
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST],
      });
    },
  });
};
