import React from "react";
import { getSymbol } from "../../../common/symbol";
import { useSelector } from "react-redux";
import { getAllGames } from "../../../redux/games";
// import { getPlayer } from "../../../redux/players";
import { getActiveGameId } from "../../../redux/currentPlayer";

interface ActivePlayer {
  playerId: string;
  players: string[];
  turn: string;
}

const ActivePlayer = ({ playerId, players, turn }: ActivePlayer) => {
  const symbol = getSymbol(playerId, players);
  // const playerName = useSelector(getPlayer(playerId)).name;
  const activeGameId: string = useSelector(getActiveGameId);
  const game = useSelector(getAllGames)[activeGameId];
  const timers = game.timers;
  const activePlayerTurn = turn === playerId;
  console.log(timers[playerId].timeLeft);
  return (
    <div className={`flex flex-col border-2 border-${symbol.color}-500 px-1`}>
      <div className="flex flex-row items-center justify-center gap-2">
        <div className={`text-${symbol.color}-500 text-center`}>
          {symbol.symbol}
        </div>
        <div
          className={`text-center h-full w-10 text-sm uppercase text-${symbol.color}-100 flex flex-col items-center justify-center`}
        >
          <text className={activePlayerTurn ? "text-red-900" : "text-black"}>
            {Math.max(0, timers[playerId].timeLeft / 1000)}
          </text>
        </div>
      </div>
    </div>
  );
};

export default ActivePlayer;
