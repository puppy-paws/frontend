import { nickName } from "./../../(route)/chatting/otherUserProfile/[other_user_id]/_component/_style/otherUserProfileModal.css";
import { EditUserProfile } from "@/app/_types/profile";
import { API_URL } from "@/app/_const/url";
import { fetchExtended, fetchFormData } from "../commonsApi";

export const postUserProfile = async (nickname: EditUserProfile) => {
  try {
    const response = await fetchExtended(API_URL.POST.USER_PROFILE, {
      method: "POST",
      body: JSON.stringify({
        nickname,
      }),
    });

    return response;
  } catch (error) {
    console.error("User profile post failed", error);
    throw error;
  }
};

export const postUserProfileImage = async (requestBody: FormData) => {
  try {
    const response = await fetchFormData(
      `${API_URL.POST.PROFILE_IMAGE_UPLOAD}?type=profile`,
      {
        method: "POST",
        body: requestBody,
      }
    );

    return response;
  } catch (error) {
    console.error("User profile image post failed", error);
    throw error;
  }
};
