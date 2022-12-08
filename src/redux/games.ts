import { createSelector } from "reselect";
import { Response, MessageTypes, GameStore } from "../common/model";
import { getActiveGameId } from "./currentPlayer";

// reducer
const initialState: GameStore = {};

const reducer = (
  state: GameStore = initialState,
  action: Response
): GameStore => {
  switch (action.type) {
    case MessageTypes.START_GAME:
    case MessageTypes.JOIN_GAME:
    case MessageTypes.SPECTATE_GAME:
    case MessageTypes.NOTIFY_TIME:
    case MessageTypes.MAKE_MOVE:
    case MessageTypes.PLAYER_DISCONNECT:
    case MessageTypes.GAME_COMPLETE: {
      return {
        ...state,
        [action.game.gameId]: action.game,
      };
    }
    default:
      return state;
  }
};

export default reducer;

// selector

export const getGame = (state: any, gameId: string) => state.games[gameId];

export const getAllGames = (state: any) => state.games;

export const getActiveGame = createSelector(
  getActiveGameId,
  getAllGames,
  (gameId, games) => games[gameId]
);

export const getActiveGamePlayers = createSelector(
  getActiveGame,
  (game) => game.players
);

export const getActiveGameStatus = createSelector(
  getActiveGame,
  (game) => game?.status
);

export const getActiveGameSpectator = createSelector(
  getActiveGame,
  (game) => game.spectators
);

export const getActiveGameTurn = createSelector(
  getActiveGame,
  (game) => game.turn
);
