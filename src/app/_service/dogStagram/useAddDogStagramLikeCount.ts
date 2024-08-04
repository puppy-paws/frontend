import { QUERY_KEYS } from "@/app/_const/queryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postDogStagramPostLike } from "@/app/_apis/dogStagram/postDogStagramPostLike";

export const useAddDogStagramLikeCount = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation<Response, unknown, number>({
    mutationFn: async (): Promise<Response> => {
      const data = await postDogStagramPostLike(postId);
      return data;
    },
    onMutate: () => {},
    onSuccess: () => {},
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
