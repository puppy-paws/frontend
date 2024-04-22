import { DogStagramPostListType } from "@/app/_types/dogStagram";
import { fetchExtended } from "../commonsApi";

export const getDogStagramPostList = async (): Promise<
  DogStagramPostListType[]
> => {
  try {
    const response = await fetchExtended("/dogstagram", {
      method: "GET",
    });
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching DogStagram post list:", error);
    throw error;
  }
};
