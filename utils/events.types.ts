export const OUT_EVENTS = {
    lobbyState: 'lobbyState',
    chatMessage: 'chatMessage',
    joinLobby: 'joinLobby',
  } as const;
  
  export const IN_EVENTS = {
    createLobby: 'createLobby',
    joinLobby: 'joinLobby',
    ping: 'ping',
    chatMessage: 'chatMessage',
  } as const;
  