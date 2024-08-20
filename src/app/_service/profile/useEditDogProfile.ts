import {
  postDogProfile,
  postDogProfileImage,
} from "./../../_apis/profile/postDogProfile";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { EditDogProfile } from "@/app/_types/profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useEditDogProfile = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<Response, unknown, EditDogProfile>({
    mutationFn: async (requestBody: EditDogProfile): Promise<Response> => {
      const data = await postDogProfile(requestBody);
      return data;
    },
    onMutate: (data) => {
      // API 요청이 성공했을 경우
    },
    onSuccess: (data) => {
      // mutation이 성공적으로 완료되면 호출
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

export const useEditDogProfileImage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<Response, unknown, FormData>({
    mutationFn: async (requestBody: FormData): Promise<Response> => {
      const data = await postDogProfileImage(requestBody);
      return data;
    },
    onMutate: (data) => {
      // API 요청이 성공했을 경우
    },
    onSuccess: (data) => {
      // mutation이 성공적으로 완료되면 호출
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
