import { patchDogStagramPost } from "./../../_apis/dogStagram/patchDogStagramPost";
import { QUERY_KEYS } from "@/app/_const/queryKey";
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
    onMutate: () => {},
    onSuccess: () => {
      router.push(`/dogstagram`);
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.invalidateQueries({
        queryKey: [`${QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST}`],
      });
      queryClient.invalidateQueries({
        queryKey: [`${QUERY_KEYS.GET_STAR_DOGSTAGRAM_POST_LIST}`],
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [`${QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST}`],
      });
      queryClient.invalidateQueries({
        queryKey: [`${QUERY_KEYS.GET_STAR_DOGSTAGRAM_POST_LIST}`],
      });
    },
  });
};
