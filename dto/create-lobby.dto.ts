import { User, UserSocket } from '../entities/user.entity';

export interface CreateLobbyDto {
  name: string;
  owner: User;
  capacity: 2 | 3 | 4 | 5 | 6;
  nbRounds: number;
}

export interface CreateLobbyAction extends CreateLobbyDto {
  owner: UserSocket;
}
