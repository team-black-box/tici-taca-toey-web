import { Response, MessageTypes, StaticPlayerStore } from "../common/model";

// reducer
const initialState: StaticPlayerStore = {};

const reducer = (
  state: StaticPlayerStore = initialState,
  action: Response
): StaticPlayerStore => {
  switch (action.type) {
    case MessageTypes.START_GAME:
    case MessageTypes.JOIN_GAME:
    case MessageTypes.SPECTATE_GAME:
    case MessageTypes.MAKE_MOVE:
    case MessageTypes.PLAYER_DISCONNECT:
    case MessageTypes.GAME_COMPLETE: {
      return {
        ...state,
        ...action.players,
        ...action.spectators,
      };
    }
    default:
      return state;
  }
};

export default reducer;

// selector

export const getPlayer = (playerId: string) => (state: any) =>
  state.players[playerId];
