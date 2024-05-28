import { CommunityPostList, DogStagramPostList } from "@/app/_types/profile";
import MyCommunutyPost from "./MyCommunityPost";
import MyDogStagramPost from "./MyDogStagramPost";

interface PostListProps {
  community: CommunityPostList[];
  dogStagram: DogStagramPostList[];
}

export default function MyPostList({ dogStagram, community }: PostListProps) {
  return (
    <>
      <MyCommunutyPost community={community} />
      <MyDogStagramPost dogStagram={dogStagram} />
    </>
  );
}
