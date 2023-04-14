import { ChatMessageObject } from "./chat-message-object";

export interface ChatMessagePayload {
  message: ChatMessageObject;
  timestamp: Date;
}
