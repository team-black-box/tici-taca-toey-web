import React from "react";
import { getSymbol } from "../../../common/symbol";
import { useSelector } from "react-redux";
import { getAllGames } from "../../../redux/games";
// import { getPlayer } from "../../../redux/players";
import { getActiveGameId } from "../../../redux/currentPlayer";

const THOUSAND = 1000;

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

  return (
    <div
      className={`flex bg-${symbol.color}-500 flex-row items-center justify-center gap-2 px-4 py-2 my-6 text-lg rounded-full font-bold`}
      style={{ width: "4rem", height: "1.7rem" }}
    >
      <div
        className={`grow text-centertext-black text-sm`}
        style={{ height: "100%", width: "50%" }}
      >
        {symbol.symbol}
      </div>
      <div
        className={`text-center grow text-sm uppercase bg-white text-${symbol.color}-900`}
        style={{ height: "100%", width: "50%" }}
      >
        <span>
          {Math.max(0, timers[playerId].timeLeft / THOUSAND)}
          <span className="text-xs">s</span>
        </span>
      </div>
    </div>
  );
};

export default ActivePlayer;
