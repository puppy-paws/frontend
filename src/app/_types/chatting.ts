export type ChattingRoom = {
  id?: number;
  userId?: number;
  receiverInfo: {
    id: number;
    nickname: string;
    profileUrl: string;
  };
  lastMessage: {
    content: string;
    createdAt: Date;
  };
  unreadMessagesCount: number;
};

export type SendMessage = {
  content: string;
  memberId: number;
  nickname: string;
  profileUrl: string;
};

export type ReceiverInfo = {
  id: number;
  nickname: string;
  profileUrl: string;
};

export type ChatMessage = {
  id: number;
  content: string;
  sender: number;
  createdAt: Date;
};

export type ChatData = {
  receiverInfo: ReceiverInfo;
  chat: ChatMessage[];
};
