"use client";

import DeleteCommonsModal from "@/app/(commons)/_component/modal/DeleteCommonsModal";
import Modal from "@/app/(commons)/_component/modal/Modal";
import { useDeleteCommunityPost } from "@/app/_service/community/useDeleteCommunityPost";

interface Props {
  params: { community_id: string };
}
export default function DeleteModal({ params }: Props) {
  const communityId = +params.community_id;
  const deleteCommunistPost = useDeleteCommunityPost(communityId);

  const handleDeleteCommunityPost = () => {
    deleteCommunistPost.mutate();
  };
  return (
    <Modal>
      <DeleteCommonsModal handler={handleDeleteCommunityPost} />
    </Modal>
  );
}
