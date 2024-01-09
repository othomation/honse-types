export interface ChatMessageDto {
  lobbyId: string;
  message: string;
}

export interface ChatMessageAction extends ChatMessageDto {
  userSocketId: string;
}
