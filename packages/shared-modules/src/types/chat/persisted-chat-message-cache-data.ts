import { ChatMessageObject } from "./chat-message-object";

export interface PersistedChatMessageCacheData {
  message: ChatMessageObject;
  timestamp: string;
}
