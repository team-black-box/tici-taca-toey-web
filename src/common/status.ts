import { GameStatus } from "./model";

export const GAME_STATUS_COLOR_MAP: any = {
  [GameStatus.WAITING_FOR_PLAYERS]: {
    text: "WAITING FOR PLAYERS",
    textColor: "text-red-100",
    backgroundColor: "bg-red-500",
  },
  [GameStatus.GAME_ABANDONED]: {
    text: "GAME ABANDONED",
    textColor: "text-red-100",
    backgroundColor: "bg-red-500",
  },
  [GameStatus.GAME_IN_PROGRESS]: {
    text: "GAME IN PROGRESS",
    textColor: "text-indigo-100",
    backgroundColor: "bg-indigo-500",
  },
  [GameStatus.GAME_WON]: {
    text: "GAME WON",
    textColor: "text-teal-100",
    backgroundColor: "bg-teal-500",
  },
  [GameStatus.GAME_ENDS_IN_A_DRAW]: {
    text: "GAME ENDS IN A DRAW",
    textColor: "text-teal-100",
    backgroundColor: "bg-teal-500",
  },
  [GameStatus.GAME_WON_BY_TIMEOUT]: {
    text: "GAME_WON_BY_TIMEOUT",
    textColor: "text-teal-100",
    backgroundColor: "bg-teal-500",
  },
};
