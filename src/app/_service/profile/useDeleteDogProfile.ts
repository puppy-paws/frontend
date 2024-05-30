import { deleteDogProfile } from "@/app/_apis/profile/deleteDogProfile";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { EditDogProfile } from "@/app/_types/profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useDeleteDogProfile = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (): Promise<Response> => {
      const data = await deleteDogProfile();
      return data;
    },
    onSuccess: () => {
      router.push("/profile");
    },
    onError: (err, _, context: any) => {
      console.error(err);
      queryClient.setQueryData<EditDogProfile>(
        [QUERY_KEYS.GET_USER_PROFILE],
        context?.previousTodos
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_USER_PROFILE],
      });
    },
  });
};
