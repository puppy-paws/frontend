import Chatting from "./_componenet/Chatting";

interface Props {
  params: { room_id: string };
}

export default function Page({ params }: Props) {
  const roomId = params.room_id;
  return <Chatting roomId={roomId} />;
}
