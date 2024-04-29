import { postCommunityPost } from "@/app/_apis/community/postCommunityPost";
import { useMutation } from "@tanstack/react-query";

interface CreateCommunityPost {
  pickup_location: string;
  pickup_date: Date;
  description: string;
}

export const useCreateCommunityPost = () => {
  useMutation({
    mutationFn: async (
      requestBody: CreateCommunityPost
    ): Promise<CreateCommunityPost> => {
      const data = await postCommunityPost(requestBody);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  // mutation option 수정 예정
};
