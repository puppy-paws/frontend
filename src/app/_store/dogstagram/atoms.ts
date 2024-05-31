import {
  DogStagramPostListType,
  StarDogStagramPostListType,
} from "@/app/_types/dogStagram";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const dogStagramPostListState = atom<DogStagramPostListType[]>({
  key: "dogStagramPostListState",
  default: [
    {
      id: 0,
      user_id: "",
      description: "",
      image_urls: [],
      is_liked: false,
      total_like: 0,
      last_liked_nickname: "",
      created_at: new Date(),
      profile_url: "",
      nickname: "",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const starDogStagramPostListState = atom<StarDogStagramPostListType[]>({
  key: "starDogStagramPostListState",
  default: [
    {
      id: 0,
      user_id: "",
      description: "",
      image_urls: [],
      is_liked: false,
      total_like: 0,
      last_liked_nickname: "",
      created_at: new Date(),
      profile_url: "",
      nickname: "",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const searchDogStagramPostState = atom({
  key: "searchDogStagramPostState",
  default: "",
});
