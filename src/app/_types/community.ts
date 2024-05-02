export interface ConvertedPostValues {
  selectbox: boolean;
  calender: boolean;
  textarea: boolean;
}

export interface CommunityPostListType {
  id: number;
  pickup_location: string;
  status: "Y" | "N";
  dog_profile_url: string;
  dog_type: string;
  dog_character: string;
  description: string;
  created_at: Date;
  nickname: string;
  user_id: string;
  profile_url: string;
}

export interface CommunityDetailPostType extends CommunityPostListType {
  dog_name: string;
  pickup_date: Date;
}
