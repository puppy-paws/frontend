export interface DogStagramPostListType {
  id: number;
  user_id: number;
  nickname: string;
  description: string;
  image_url: string[];
  is_liked: boolean;
  total_like: number;
  last_liked_user: string;
  created_at: Date;
}
