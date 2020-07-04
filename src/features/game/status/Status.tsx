import React from "react";
import { GameStatus, Game } from "../../../common/model";
import { useSelector } from "react-redux";
import { getActiveGame } from "../../../redux/games";
import Share from "../../share/Share";
import { GAME_STATUS_COLOR_MAP } from "../../../common/status";

interface GameStatusTagProps {
  status: GameStatus;
  playerCount: number;
  playersInGame: number;
}

const GameStatusTag = ({
  status,
  playerCount,
  playersInGame,
}: GameStatusTagProps) => {
  const remainingPlayersToJoin = playerCount - playersInGame;
  const gameStatus = GAME_STATUS_COLOR_MAP[status];
  return (
    <div
      className={`px-4 py-2 my-6 text-lg rounded-lg font-bold ${gameStatus.textColor} ${gameStatus.backgroundColor}`}
    >
      {gameStatus.text}{" "}
      {status === GameStatus.WAITING_FOR_PLAYERS &&
        `(${remainingPlayersToJoin}/${playerCount})`}
    </div>
  );
};

const Status = () => {
  const game: Game = useSelector(getActiveGame);
  return (
    <div className="flex flex-row">
      <div className="text-center px-4 py-2 m-2 text-4xl">{game.name}</div>
      <GameStatusTag
        status={game.status}
        playerCount={game.playerCount}
        playersInGame={game.players.length}
      />
      {[GameStatus.GAME_IN_PROGRESS, GameStatus.WAITING_FOR_PLAYERS].includes(
        game.status
      ) && <Share gameId={game.gameId} gameStatus={game.status} />}
    </div>
  );
};

export default Status;
