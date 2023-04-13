export interface UserJoinedChat {
  username: string;
  lastSeen: Date | null;
  mod: boolean;
  subscriber: boolean;
}
