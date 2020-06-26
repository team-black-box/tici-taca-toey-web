import { Response, MessageTypes, GameStore } from "../common/model";

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
