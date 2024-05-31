"use client";

import DeleteCommonsModal from "@/app/(commons)/_component/modal/DeleteCommonsModal";
import Modal from "@/app/(commons)/_component/modal/Modal";
import { useDeleteDogStagramPost } from "@/app/_service/dogStagram/useDeleteDogStagramPost";

interface Props {
  params: { post_id: string };
}

export default function DeleteModal({ params }: Props) {
  const postId = +params.post_id;
  const deleteDogStagramPost = useDeleteDogStagramPost(postId);

  const handleDeleteDogStagramPost = () => {
    deleteDogStagramPost.mutate();
  };

  return (
    <Modal>
      <DeleteCommonsModal handler={handleDeleteDogStagramPost} />
    </Modal>
  );
}
