import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActiveGame } from "../../../redux/games";
import { getCurrentPlayerId } from "../../../redux/currentPlayer";
import { makeMove } from "../../../redux/actions";
import { Game, GameStatus } from "../../../common/model";
import { getSymbol, EMPTY_CELL } from "../../../common/symbol";

interface CellProps {
  playerId: string;
  players: string[];
  boardSize: number;
  turn: string;
  currentPlayer: string;
  status: GameStatus;
  coordinateX: number;
  coordinateY: number;
  gameId: string;
}

const getGridCellSize = (boardSize: number): string => {
  switch (boardSize) {
    case 1:
    case 2:
    case 3:
    case 4:
      return "h-64 w-64 p-20";
    case 5:
      return "h-56 w-56 p-16";
    case 6:
      return "h-48 w-48 p-12";
    case 7:
      return "h-40 w-40 p-10";
    case 8:
    case 9:
      return "h-32 w-32 p-4";
    case 10:
    case 11:
    case 12:
      return "h-24 w-24 p-2";
    default:
      return "h-24 w-24 p-2";
  }
};

const dispatchableMove = (
  dispatch: any,
  coordinateX: number,
  coordinateY: number,
  gameId: string
) => () => dispatch(makeMove(gameId, coordinateX, coordinateY));

const Cell = ({
  playerId,
  players,
  boardSize,
  turn,
  currentPlayer,
  status,
  coordinateX,
  coordinateY,
  gameId,
}: CellProps) => {
  const playerSymbol = getSymbol(playerId, players);

  const boardEnabled =
    status === GameStatus.GAME_IN_PROGRESS &&
    playerId === EMPTY_CELL &&
    turn === currentPlayer;

  const dispatch = useDispatch();

  return (
    <div
      className={`${getGridCellSize(boardSize)} text-${
        playerSymbol.color
      }-500 border-2 cursor-pointer hover:shadow-outline hover:bg-blue-500 hover:bg-opacity-25 ${
        !boardEnabled ? "cursor-not-allowed" : ""
      }`}
      onClick={dispatchableMove(dispatch, coordinateX, coordinateY, gameId)}
    >
      {playerSymbol.symbol}
    </div>
  );
};

const Board = () => {
  const currentPlayer: string = useSelector(getCurrentPlayerId);
  const game: Game = useSelector(getActiveGame);
  return (
    <div
      className={`grid grid-rows-${game.boardSize} grid-cols-${game.boardSize} gap-2 text-6xl text-center`}
    >
      {game.positions
        .flatMap((each) => each)
        .map((each, index) => (
          <Cell
            coordinateX={Math.floor(index / game.boardSize)}
            coordinateY={index % game.boardSize}
            playerId={each}
            players={game.players}
            boardSize={game.boardSize}
            turn={game.turn}
            currentPlayer={currentPlayer}
            status={game.status}
            key={index}
            gameId={game.gameId}
          />
        ))}
    </div>
  );
};

export default Board;
