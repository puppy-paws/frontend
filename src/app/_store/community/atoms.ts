import {
  CommunityDetailPostType,
  CommunityPostListType,
} from "./../../_types/community";
import { ConvertedPostValues } from "@/app/_types/community";
import { atom } from "recoil";

export const createDefaultValues = (): ConvertedPostValues => ({
  selectbox: false,
  calender: false,
  textarea: false,
});

export const convertedPostValuesState = atom({
  key: "convertedPostValuesState",
  default: createDefaultValues(),
});

export const communityPostListState = atom<CommunityPostListType[]>({
  key: "communityPostListState",
  default: [
    {
      id: 0,
      pickup_location: "",
      status: "N",
      dog_profile_url: "",
      dog_type: "",
      dog_character: "",
      description: "",
      created_at: new Date(),
      nickname: "",
      user_id: "",
      profile_url: "",
    },
  ],
});

export const communityDetailPostState = atom<CommunityDetailPostType>({
  key: "communityDetailPostState",
  default: {
    id: 0,
    dog_name: "",
    pickup_location: "",
    status: "N",
    dog_profile_url: "",
    dog_type: "",
    dog_character: "",
    description: "",
    created_at: new Date(),
    nickname: "",
    user_id: "",
    profile_url: "",
    pickup_date: new Date(),
  },
});
