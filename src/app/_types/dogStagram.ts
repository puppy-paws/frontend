export interface DogStagramPostListType {
  id: number;
  user_id: string;
  description: string;
  image_urls: string[];
  is_liked: boolean;
  total_like: number;
  created_at: Date;
  last_liked_nickname: string;
  profile_url: string;
  nickname: string;
}

export interface StarDogStagramPostListType extends DogStagramPostListType {}

export interface DogStagramPostTypeProps {
  type: "dog" | "starDog";
  idx: number;
}

export type PostDogStagramPost = {
  image?: File | null;
  image2?: File | null;
  image3?: File | null;
  description?: string;
};

export interface DogStagramPostAllInfo extends PostDogStagramPost {}

export interface EditDogStagramPost {
  description: string;
}
