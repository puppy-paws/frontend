import DeleteCommonsModal from "@/app/(commons)/_component/modal/DeleteCommonsModal";
import Modal from "@/app/(commons)/_component/modal/Modal";

interface Props {
  params: { community_id: string };
}
export default function DeleteModal({ params }: Props) {
  const communityId = +params.community_id;
  return (
    <Modal>
      <DeleteCommonsModal communityId={communityId} />
    </Modal>
  );
}
