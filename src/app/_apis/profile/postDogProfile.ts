import { fetchExtended } from "./../commonsApi";
import { API_URL } from "@/app/_const/url";
import { fetchFormData } from "../commonsApi";
import { EditDogProfile } from "@/app/_types/profile";

export const postDogProfile = async (requestBody: EditDogProfile) => {
  try {
    const response = await fetchExtended(API_URL.POST.DOG_PROFILE, {
      method: "POST",
      body: JSON.stringify({
        dog_name: requestBody.dogName,
        dog_type: requestBody.dogType,
        dog_character: requestBody.dogCharacters[0],
        dog_character2: requestBody.dogCharacters[1],
      }),
    });

    return response;
  } catch (error) {
    console.error("Dog profile post failed", error);
    throw error;
  }
};

export const postDogProfileImage = async (requestBody: FormData) => {
  try {
    const response = await fetchFormData(
      `${API_URL.POST.PROFILE_IMAGE_UPLOAD}?type=dog-profile`,
      {
        method: "POST",
        body: requestBody,
      }
    );

    return response;
  } catch (error) {
    console.error("Dog profile image post failed", error);
    throw error;
  }
};
