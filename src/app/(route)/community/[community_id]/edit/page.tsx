import PostEdit from "./_component/PostEdit";

interface Props {
  params: { community_id: number };
}

export default function Page({ params }: Props) {
  const communityId = params.community_id;
  return <PostEdit communityId={communityId} />;
}
