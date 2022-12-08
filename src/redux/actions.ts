import { Dispatch } from "redux";
import {
  MessageTypes,
  RegisterPlayerMessage,
  StartGameMessage,
  JoinGameMessage,
  SpectateGameMessage,
  MakeMoveMessage,
  UpdateTimeMessage,
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
  playerCount: number,
  winningSequenceLength: number
) => {
  return (dispatch: Dispatch) => {
    const startGameAction: StartGameMessage = {
      type: MessageTypes.START_GAME,
      name,
      boardSize,
      playerCount,
      winningSequenceLength,
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
  return (dispatch: any) => {
    const spectateGameAction: SpectateGameMessage = {
      type: MessageTypes.SPECTATE_GAME,
      gameId,
    };
    dispatch(spectateGameAction);
  };
};

export const timeUpdate = (gameId: string) => {
  return (dispatch: any) => {
    const updateTimeAction: UpdateTimeMessage = {
      type: MessageTypes.NOTIFY_TIME,
      gameId,
    };
    dispatch(updateTimeAction);
  };
};

export const makeMove = (
  gameId: string,
  coordinateX: number,
  coordinateY: number
) => {
  return (dispatch: Dispatch) => {
    const makeMoveAction: MakeMoveMessage = {
      type: MessageTypes.MAKE_MOVE,
      coordinateX,
      coordinateY,
      gameId,
    };
    dispatch(makeMoveAction);
  };
};

export const setActiveGame = (gameId: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: MessageTypes.SET_ACTIVE_GAME, gameId });
  };
};
