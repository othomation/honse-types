import { User, UserSocket } from '../entities/user.entity';

export interface JoinLobbyDto {
  lobbyId: string;
  user: User;
}

export interface JoinLobbyAction extends JoinLobbyDto {
  user: UserSocket;
}
