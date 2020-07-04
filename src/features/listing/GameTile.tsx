import React from "react";
import { Game } from "../../common/model";
import { GAME_STATUS_COLOR_MAP } from "../../common/status";
import { useSelector, useDispatch } from "react-redux";
import { getGame } from "../../redux/games";
import { getCurrentPlayerId, getActiveGameId } from "../../redux/currentPlayer";
import { setActiveGame } from "../../redux/actions";

interface GameTileProps {
  gameId: string;
}

const GameTile = ({ gameId }: GameTileProps) => {
  const game: Game = useSelector((state) => getGame(state, gameId));
  const currentPlayer: string = useSelector(getCurrentPlayerId);
  const activeGameId: string = useSelector(getActiveGameId);
  const gameStatus = GAME_STATUS_COLOR_MAP[game.status];
  const dispatch = useDispatch();
  return (
    <div
      className={`mr-4 mt-2 flex p-6 ${
        activeGameId === gameId ? "bg-indigo-100" : "bg-white"
      } rounded-lg shadow-md cursor-pointer hover:shadow-outline`}
      onClick={() => dispatch(setActiveGame(gameId))}
    >
      <div className="mr-6">
        <div className="text-base text-gray-600 leading-normal">
          {game.name}
        </div>
        <div className="text-sm text-gray-900 leading-tight">
          {game.players.includes(currentPlayer) ? "Playing" : "Spectating"} Game
        </div>
        <div
          className={`p-1 mt-1 text-xs rounded-sm text-center font-bold ${gameStatus.textColor} ${gameStatus.backgroundColor}`}
        >
          {gameStatus.text}
        </div>
      </div>
      <div className="flex-shrink-0 pt-1">
        <div className="grid grid-cols-2 grid-rows-3">
          <div className="text-sm text-gray-900 leading-tight">
            <i className="fas fa-th" />
          </div>
          <div className="text-sm text-gray-900 leading-tight">
            {game.boardSize}x{game.boardSize}
          </div>
          <div className="text-sm text-gray-900 leading-tight">
            <i className="fas fa-user" />
          </div>
          <div className="text-sm text-gray-900 leading-tight">
            {game.playerCount}
          </div>
          <div className="text-sm text-gray-900 leading-tight">
            <i className="fas fa-glasses" />
          </div>
          <div className="text-sm text-gray-900 leading-tight">
            {game.spectators.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTile;
