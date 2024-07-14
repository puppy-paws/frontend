"use client";

import Modal from "@/app/(commons)/_component/modal/Modal";
import OtherUserProfile from "@/app/(route)/chatting/otherUserProfile/[other_user_id]/_component/OtherUserProfile";

interface Props {
  params: { other_user_id: string };
}
export default function OtherUserProfileModal({ params }: Props) {
  const otherUserId = +params.other_user_id;
  return (
    <Modal>
      <OtherUserProfile otherUserId={otherUserId} />
    </Modal>
  );
}
