import React from "react";
import { getSymbol } from "../../../common/symbol";
import { useSelector } from "react-redux";
import { getAllGames } from "../../../redux/games";
import { getActiveGameId } from "../../../redux/currentPlayer";

const THOUSAND = 1000;

interface ActivePlayer {
  playerId: string;
  players: string[];
  turn: string;
}

const ActivePlayer = ({ playerId, players, turn }: ActivePlayer) => {
  const symbol = getSymbol(playerId, players);
  const activeGameId: string = useSelector(getActiveGameId);
  const game = useSelector(getAllGames)[activeGameId];
  const timers = game.timers;

  return (
    <div
      className={`flex flex-row border-2 border-slate-800 items-center justify-center gap-2 text-lg rounded-l-2xl rounded-r-2xl font-bold`}
    >
      <div
        className={`text-center p-3 text-black text-sm bg-${symbol.color}-500 rounded-l-2xl`}
      >
        {symbol.symbol}
      </div>
      <div
        className={`text-sm p-3 uppercase bg-white text-${symbol.color}-900 rounded-r-2xl`}
      >
        <span>
          {Math.max(0, timers[playerId].timeLeft / THOUSAND).toFixed(2)}
          <span className="text-xs">s</span>
        </span>
      </div>
    </div>
  );
};

export default ActivePlayer;
