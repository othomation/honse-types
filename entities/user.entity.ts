export type User = {
  name: string;
};

export type UserSocket = User & {
  socketId: string;
};

export const ANON_NAME = "Honse Anon" as const;