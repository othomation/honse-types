export type User = {
  name: string;
};

export type UserSocket = User & {
  socketId: string;
};
