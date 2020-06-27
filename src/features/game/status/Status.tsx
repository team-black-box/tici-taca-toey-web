import React from "react";
import { GameStatus, Game } from "../../../common/model";
import { useSelector } from "react-redux";
import { getActiveGame } from "../../../redux/games";

interface GameStatusTagProps {
  status: GameStatus;
}

const GameStatusTag = ({ status }: GameStatusTagProps) => {
  switch (status) {
    case GameStatus.WAITING_FOR_PLAYERS:
      return (
        <div className="text-center px-4 py-2 my-6 text-lg rounded-full bg-red-500 uppercase font-bold text-red-100">
          WAITING FOR PLAYERS
        </div>
      );
    case GameStatus.GAME_IN_PROGRESS:
      return (
        <div className="text-center px-4 py-2 my-6 text-lg rounded-full bg-indigo-500 uppercase font-bold text-indigo-100">
          GAME IN PROGRESS
        </div>
      );
    case GameStatus.GAME_WON:
      return (
        <div className="text-center px-4 py-2 my-6 text-lg rounded-full bg-teal-500 uppercase font-bold text-teal-100">
          GAME WON
        </div>
      );
    case GameStatus.GAME_ENDS_IN_A_DRAW:
      return (
        <div className="text-center px-4 py-2 my-6 text-lg rounded-full bg-teal-500 uppercase font-bold text-teal-100">
          GAME ENDS IN A DRAW
        </div>
      );
    default:
      return null;
  }
};

const Status = () => {
  const game: Game = useSelector(getActiveGame);
  return (
    <div className="flex flex-row">
      <div className="text-center px-4 py-2 m-2 text-4xl">{game.name}</div>
      <GameStatusTag status={game.status} />
    </div>
  );
};

export default Status;
