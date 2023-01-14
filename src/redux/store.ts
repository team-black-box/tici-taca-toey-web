import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import { MessageTypes } from "../common/model";
import currentPlayerReducer from "./currentPlayer";
import gamesReducer from "./games";
import playersReducer from "./players";

const socket = new WebSocket(`ws://localhost:8080`);

const webSocketMiddleware = (store: any) => (next: any) => (action: any) => {
  if (
    [
      MessageTypes.UPDATE_NAME,
      MessageTypes.CONNECTED_TO_SERVER,
      MessageTypes.SET_ACTIVE_GAME,
    ].includes(action.type) ||
    action._socketResponse
  ) {
    return next(action);
  } else {
    socket.send(JSON.stringify(action));
  }
};

const reducers = combineReducers({
  currentPlayer: currentPlayerReducer,
  games: gamesReducer,
  players: playersReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk, webSocketMiddleware))
);

socket.addEventListener("open", (event) => {
  store.dispatch({ type: MessageTypes.CONNECTED_TO_SERVER });
});

socket.addEventListener("message", (event) => {
  store.dispatch({ ...JSON.parse(event.data), _socketResponse: true });
});

export default store;
