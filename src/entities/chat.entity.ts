import { UserSocket } from "./user.entity";

export type Chat = {
  from: UserSocket;
  content: string;
  timestamp: number;
  isCorrect: boolean;
  lobbyId: string;
};
