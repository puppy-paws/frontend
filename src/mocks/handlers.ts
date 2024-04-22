import { http, HttpResponse } from "msw";

export const handlers = Array.from({ length: 100 }, () => {
  return http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/dogstagram`, () => {
    const dogData = (index: number) => ({
      id: `dog${index}`,
      user_id: `user${index}`,
      nickname: `nickname${index}`,
      description: `so cute ${index}`,
      image_url: [
        "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3037.jpg",
        "https://images.dog.ceo//breeds//akita//An_Akita_Inu_resting.jpg",
        "https://images.dog.ceo//breeds//poodle-toy//n02113624_253.jpg",
      ],
      is_liked: index % 2 === 0 ? true : false,
      total_like: index,
      last_liked_user: `user${index}`,
      created_at: "2023-03-01",
    });

    return HttpResponse.json({
      data: Array.from({ length: 100 }, (_, index) => dogData(index)),
    });
  });
});
