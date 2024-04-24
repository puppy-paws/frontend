export const API_URL = {
  GET: {
    starDogStagram: "dogstagram/star-dog",
    dogStagram: (pageParam?: number) => `dogstagram?cursor=${pageParam}`,
  },
};
