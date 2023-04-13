export interface ChatMessageObject {
  displayName: string;
  username: string;
  message: string;
  mod: boolean;
  subscriber: boolean;
  chatCommand: string;
  emotes: (string | null)[];
}
