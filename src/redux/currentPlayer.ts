import { Response, MessageTypes } from "../common/model";
import { createSelector } from "reselect";
import uniq from "lodash.uniq";

// reducer

interface CurrentPlayerState {
  connected: boolean;
  name: string;
  playerId: string;
  playing: string[];
  spectating: string[];
}

const initialState: CurrentPlayerState = {
  connected: false,
  name: "",
  playerId: "",
  playing: [],
  spectating: [],
};

const reducer = (
  state: CurrentPlayerState = initialState,
  action: Response
): CurrentPlayerState => {
  switch (action.type) {
    case MessageTypes.CONNECTED_TO_SERVER:
      return { ...state, connected: true };
    case MessageTypes.UPDATE_NAME:
      return { ...state, name: action.name };
    case MessageTypes.REGISTER_PLAYER:
      return { ...state, playerId: action.playerId };
    case MessageTypes.START_GAME:
    case MessageTypes.JOIN_GAME:
      return {
        ...state,
        playing: uniq([...state.playing, action.game.gameId]),
      };
    case MessageTypes.SPECTATE_GAME: {
      return {
        ...state,
        spectating: uniq([...state.playing, action.game.gameId]),
      };
    }
    case MessageTypes.GAME_COMPLETE:
      return {
        ...state,
        playing: [
          ...state.playing.filter((each) => each !== action.game.gameId),
        ],
        spectating: [
          ...state.spectating.filter((each) => each !== action.game.gameId),
        ],
      };
    default:
      return state;
  }
};

export default reducer;

// selector

const getCurrentPlayer = (state: any) => state.currentPlayer;

export const isConnectedToServer = createSelector(
  getCurrentPlayer,
  (cp) => cp.connected
);

export const getCurrentPlayerName = createSelector(
  getCurrentPlayer,
  (cp) => cp.name
);

export const getCurrentlyPlayingGames = createSelector(
  getCurrentPlayer,
  (cp) => cp.playing
);
