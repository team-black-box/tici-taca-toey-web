import WebSocket from "ws";

export interface Game {
  gameId: string;
  name: string;
  boardSize: number;
  winningSequenceLength: number;
  positions: string[][];
  playerCount: number;
  players: string[];
  spectators: string[];
  winner: string;
  winningSequence: WinningSequence[];
  status: GameStatus;
  turn: string;
}

interface WinningSequence {
  x: number;
  y: number;
}

export interface Player {
  name: string;
  playerId: string;
}

export interface ConnectedPlayer extends Player {
  connection: WebSocket;
}

export interface GameStore {
  [key: string]: Game;
}

export interface GameState {
  game: Game;
  players: {
    [key: string]: Player;
  };
  spectators: {
    [key: string]: Player;
  };
}

export interface StaticPlayerStore {
  [key: string]: Player;
}

export interface PlayerStore {
  [key: string]: ConnectedPlayer;
}

export interface GameEngine {
  games: GameStore;
  players: PlayerStore;
  play: (message: Message, notify: boolean) => Promise<GameEngine>;
  validate: (message: Message) => Promise<Message>;
  transition: (message: Message) => void;
  disconnectPlayer: (playerId: string) => void;
  notify: (message: Message) => void;
  notifyError: (error: GameError) => void;
}

// Incoming messages - optional properties enriched by server

export interface RegisterPlayerMessage {
  type: MessageTypes.REGISTER_PLAYER;
  name: string;
  connection?: WebSocket;
  playerId?: string;
  gameId?: string;
}

export interface StartGameMessage {
  type: MessageTypes.START_GAME;
  name: string;
  boardSize: number;
  playerCount: number;
  winningSequenceLength: number;
  connection?: WebSocket;
  playerId?: string;
  gameId?: string;
}

export interface JoinGameMessage {
  type: MessageTypes.JOIN_GAME;
  gameId: string;
  connection?: WebSocket;
  playerId?: string;
}

export interface SpectateGameMessage {
  type: MessageTypes.SPECTATE_GAME;
  gameId: string;
  connection?: WebSocket;
  playerId?: string;
}

export interface MakeMoveMessage {
  type: MessageTypes.MAKE_MOVE;
  coordinateX: number;
  coordinateY: number;
  gameId: string;
  connection?: WebSocket;
  playerId?: string;
}

export type Message =
  | RegisterPlayerMessage
  | StartGameMessage
  | JoinGameMessage
  | SpectateGameMessage
  | MakeMoveMessage;

// Responses

export interface RegisterPlayerResponse extends Player {
  type: MessageTypes.REGISTER_PLAYER;
}

export interface GameActionResponse extends GameState {
  type:
    | MessageTypes.START_GAME
    | MessageTypes.JOIN_GAME
    | MessageTypes.MAKE_MOVE
    | MessageTypes.SPECTATE_GAME
    | MessageTypes.PLAYER_DISCONNECT
    | MessageTypes.GAME_COMPLETE;
}

export interface UpdateNameAction {
  type: MessageTypes.UPDATE_NAME;
  name: string;
}

export interface SetActiveGameAction {
  type: MessageTypes.SET_ACTIVE_GAME;
  gameId: string;
}

export interface ConnectedToServerAction {
  type: MessageTypes.CONNECTED_TO_SERVER;
}

export type Response =
  | RegisterPlayerResponse
  | GameActionResponse
  | UpdateNameAction
  | ConnectedToServerAction
  | SetActiveGameAction;

export interface GameError {
  error: ErrorCodes;
  message: Message;
}

export enum GameInteractionTypes {
  PLAY = "play",
  SPECTATE = "spectate",
}

export enum MessageTypes {
  REGISTER_PLAYER = "REGISTER_PLAYER",
  START_GAME = "START_GAME",
  JOIN_GAME = "JOIN_GAME",
  MAKE_MOVE = "MAKE_MOVE",
  SPECTATE_GAME = "SPECTATE_GAME",
  PLAYER_DISCONNECT = "PLAYER_DISCONNECT",
  GAME_COMPLETE = "GAME_COMPLETE", // response only
  UPDATE_NAME = "UPDATE_NAME", // client only
  CONNECTED_TO_SERVER = "CONNECTED_TO_SERVER", // client only
  SET_ACTIVE_GAME = "SET_ACTIVE_GAME", // client only
}

export enum ErrorCodes {
  GAME_NOT_FOUND = "GAME_NOT_FOUND",
  PLAYER_ALREADY_PART_OF_GAME = "PLAYER_ALREADY_PART_OF_GAME",
  GAME_ALREADY_IN_PROGRESS = "GAME_ALREADY_IN_PROGRESS",
  MOVE_OUT_OF_TURN = "MOVE_OUT_OF_TURN",
  INVALID_MOVE = "INVALID_MOVE",
  BAD_REQUEST = "BAD_REQUEST",
  BOARD_SIZE_LESS_THAN_2 = "BOARD_SIZE_LESS_THAN_2",
  PLAYER_COUNT_LESS_THAN_2 = "PLAYER_COUNT_LESS_THAN_2",
  WIN_SEQ_LENGTH_MUST_BE_LESS_THAN_OR_EQUAL_TO_BOARD_SIZE = "WINNING_SEQUENCE_LENGTH_MUST_BE_LESS_THAN_OR_EQUAL_TO_BOARD_SIZE",
}

export enum GameStatus {
  WAITING_FOR_PLAYERS = "WAITING_FOR_PLAYERS",
  GAME_IN_PROGRESS = "GAME_IN_PROGRESS",
  GAME_WON = "GAME_WON",
  GAME_ENDS_IN_A_DRAW = "GAME_ENDS_IN_A_DRAW",
  GAME_ABANDONED = "GAME_ABANDONED",
  GAME_WON_BY_TIMEOUT = "GAME_WON_BY_TIMEOUT",
}
