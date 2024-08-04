import { deleteDogStagramPost } from "@/app/_apis/dogStagram/deleteDogStagramPost";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useDeleteDogStagramPost = (postId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (): Promise<Response> => {
      const data = await deleteDogStagramPost(postId);
      return data;
    },
    onSuccess: () => {
      window.history.go(-1);
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.setQueryData<DogStagramPostListType>(
        [QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST],
        context?.previousTodos
      );
      queryClient.invalidateQueries({
        queryKey: [`${QUERY_KEYS.GET_STAR_DOGSTAGRAM_POST_LIST}`],
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_DOGSTAGRAM_POST_LIST],
      });
      queryClient.invalidateQueries({
        queryKey: [`${QUERY_KEYS.GET_STAR_DOGSTAGRAM_POST_LIST}`],
      });
    },
  });
};
