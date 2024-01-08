import { Uuid } from "../utils";
import { Chat } from "./chat.entity";
import { UserSocket } from "./user.entity";

export type Round = {
  word?: string;
  availableWords: [string, string, string];
  drawer?: UserSocket;
  guesses: {
    [userSocketId: string]: 0 | 1 | 2 | 3 | 4;
  };
};

export type Scoreboard = {
  [userSocketId: string]: number;
};

export type Status = "WAITING_FOR_PLAYERS" | "FULL" | "RUNNING" | "ENDED";

export type Lobby = {
  id: Uuid;
  name: string;
  owner: UserSocket;
  users: UserSocket[];
  capacity: 2 | 3 | 4 | 5 | 6;
  status: Status;
  currentRound: number;
  rounds: Round[];
  scoreboard: Scoreboard;
};

export type LobbyAndChat = {
  lobby: Lobby;
  chat: Chat[];
};
