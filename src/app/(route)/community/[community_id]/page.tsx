import PostDetails from "../_component/PostDetail";

export default function Page({ params }: { params: { community_id: string } }) {
  return (
    <>
      <PostDetails params={params} />
    </>
  );
}
