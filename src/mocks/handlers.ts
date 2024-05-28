import { API_URL } from "@/app/_const/url";
import { http, HttpResponse } from "msw";

export const handlers = [
  ...Array.from({ length: 10 }, (_, index) => {
    const take = 10;
    const skip = index * take;
    return http.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${API_URL.GET.DOGSTAGRAM}?take=${take}&skip=${skip}`,
      async () => {
        const dogData = (index: number) => ({
          id: `${index + skip}`,
          user_id: `user${index + skip}`,
          nickname: `nickname${index + skip}`,
          description: `so cute ${index + skip}`,
          image_url: [
            "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3037.jpg",
            "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg",
            "https://images.dog.ceo//breeds//poodle-toy//n02113624_253.jpg",
          ],
          is_liked: index % 2 ? true : false,
          total_like: index,
          last_liked_user: `user${index + skip}`,
          created_at: "2023-03-01",
        });

        return HttpResponse.json({
          data: Array.from({ length: take }, (_, index) =>
            dogData(index + skip)
          ),
        });
      }
    );
  }),
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${API_URL.GET.STAR_DOGSTGRAM}`,
    () => {
      const dogData = (index: number) => ({
        id: `${index}`,
        user_id: `user${index}`,
        nickname: `nickname${index}`,
        description: `so cute ${index}`,
        image_url: [
          "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3037.jpg",
          "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg",
          "https://images.dog.ceo//breeds//poodle-toy//n02113624_253.jpg",
        ],
        is_liked: index % 2 ? true : false,
        total_like: index,
        last_liked_user: `user${index}`,
        created_at: "2023-03-01",
      });

      return HttpResponse.json({
        data: Array.from({ length: 4 }, (_, index) => dogData(index)),
      });
    }
  ),
  http.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/community`,
    async ({ request }) => {
      const requestBody = await request.json();

      const newPostId = Math.random().toString(36).substring(2, 15);

      const newDogData = {
        id: newPostId,
        requestBody,
        is_liked: false,
        total_like: 0,
        created_at: new Date().toISOString(),
      };

      return HttpResponse.json({
        data: newDogData,
        message: "Dog post created successfully!",
      });
    }
  ),
];
