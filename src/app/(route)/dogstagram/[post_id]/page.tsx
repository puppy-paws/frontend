import DogStargramEditing from "./edit/_component/DogStargramEditing";

interface Props {
  params: { post_id: string };
}

export default function Page({ params }: Props) {
  const postId = +params.post_id;
  return <DogStargramEditing postId={postId} />;
}
