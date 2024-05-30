import PostDetails from "./_component/PostDetail";

interface Props {
  params: { community_id: string };
}

export default function Page({ params }: Props) {
  const communityId = +params.community_id;
  return <PostDetails communityId={communityId} />;
}
