import { Dispatch } from "redux";
import {
  MessageTypes,
  RegisterPlayerMessage,
  StartGameMessage,
  JoinGameMessage,
  SpectateGameMessage,
} from "../common/model";

// actions

export const updateCurrentPlayerName = (name: string): any => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: MessageTypes.UPDATE_NAME,
      name,
    });
    const registerPlayerAction: RegisterPlayerMessage = {
      type: MessageTypes.REGISTER_PLAYER,
      name,
    };
    dispatch(registerPlayerAction);
  };
};

export const startGame = (
  name: string,
  boardSize: number,
  playerCount: number
) => {
  return (dispatch: Dispatch) => {
    const startGameAction: StartGameMessage = {
      type: MessageTypes.START_GAME,
      name,
      boardSize,
      playerCount,
    };
    dispatch(startGameAction);
  };
};

export const joinGame = (gameId: string) => {
  return (dispatch: Dispatch) => {
    const joinGameAction: JoinGameMessage = {
      type: MessageTypes.JOIN_GAME,
      gameId,
    };
    dispatch(joinGameAction);
  };
};

export const spectateGame = (gameId: string) => {
  return (dispatch: Dispatch) => {
    const spectateGameAction: SpectateGameMessage = {
      type: MessageTypes.SPECTATE_GAME,
      gameId,
    };
    dispatch(spectateGameAction);
  };
};
