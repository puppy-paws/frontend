import { API_URL } from "@/app/_const/url";
import { http, HttpResponse } from "msw";

export const handlers = [
  ...Array.from({ length: 8 }, () => {
    return http.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${API_URL.GET.dogStagram()}`,
      async ({ request }) => {
        const url = new URL(request.url);
        const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;

        const dogData = (index: number) => ({
          id: `${index + cursor}`,
          user_id: `user${index + cursor}`,
          nickname: `nickname${index + cursor}`,
          description: `so cute ${index + cursor}`,
          image_url: [
            "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3037.jpg",
            "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg",
            "https://images.dog.ceo//breeds//poodle-toy//n02113624_253.jpg",
          ],
          is_liked: index % 2 ? true : false,
          total_like: index,
          last_liked_user: `user${index + cursor}`,
          created_at: "2023-03-01",
        });

        return HttpResponse.json({
          data: Array.from({ length: 8 }, (_, index) => dogData(index)),
        });
      }
    );
  }),
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${API_URL.GET.starDogStagram}`,
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
