import { Uuid } from "./redis.types";
import { ChatMessageAction } from "../dto/chat-message.dto";
import { CreateLobbyAction } from "../dto/create-lobby.dto";
import { JoinLobbyAction } from "../dto/join-lobby.dto";
import { LeaveLobbyAction } from "../dto/leave-lobby.dto";
import { Chat } from "../entities/chat.entity";
import { Lobby } from "../entities/lobby.entity";

export const ServiceActions = {
  CREATE: "CREATE",
  JOIN: "JOIN",
  PING: "PING",
  LEAVE: "LEAVE",
  SEND_CHAT_MESSAGE: "SEND_CHAT_MESSAGE",
  NEXT_ROUND: "NEXT_ROUND",
  START_GAME: "START_GAME",
} as const;

export type ServiceActionsPayloads = {
  [ServiceActions.CREATE]: CreateLobbyAction;
  [ServiceActions.JOIN]: JoinLobbyAction;
  [ServiceActions.PING]: { lobbyId: Uuid };
  [ServiceActions.LEAVE]: LeaveLobbyAction;
  [ServiceActions.SEND_CHAT_MESSAGE]: ChatMessageAction;
  [ServiceActions.NEXT_ROUND]: {
    lobbyId: Uuid;
  };
  [ServiceActions.START_GAME]: { lobbyId: Uuid; userSocketId: string };
};

export type ServiceActionsResponse = {
  [ServiceActions.CREATE]: StateGatewayResponse;
  [ServiceActions.JOIN]: StateGatewayResponse;
  [ServiceActions.PING]: StateGatewayResponse;
  [ServiceActions.LEAVE]: StateGatewayResponse;
  [ServiceActions.SEND_CHAT_MESSAGE]: StateGatewayResponse;
  [ServiceActions.NEXT_ROUND]: StateGatewayResponse;
  [ServiceActions.START_GAME]: StateGatewayResponse;
};

export type States = {
  lobby?: Lobby;
  chats?: Chat[];
  chat?: Chat;
};

export type GwError = {
  message?: string;
  error: Error | null;
};

export type StateGatewayResponse = {
  state: States;
  error: GwError | null;
};
