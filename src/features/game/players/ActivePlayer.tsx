import React from "react";
import { getSymbol } from "../../../common/symbol";
import { generateIdenticon } from "../../../common/identicon";
import { useSelector } from "react-redux";
import { getPlayer } from "../../../redux/players";
import { getActiveGameId } from "../../../redux/currentPlayer";
import Timer from "../timer/Timer";

interface ActivePlayer {
  playerId: string;
  players: string[];
  turn: string;
}

const ActivePlayer = ({ playerId, players, turn }: ActivePlayer) => {
  const symbol = getSymbol(playerId, players);
  const playerName = useSelector(getPlayer(playerId)).name;
  const activeGameId: string = useSelector(getActiveGameId);
  const activePlayerTurn = turn === playerId;
  return (
    <div className={`flex flex-col border-2 border-${symbol.color}-500`}>
      <div className="flex flex-row items-center justify-center gap-2">
        <div className={`text-${symbol.color}-500 text-center`}>
          {symbol.symbol}
        </div>
        <div
          className={`text-center h-full w-10 text-sm uppercase text-${symbol.color}-100 flex flex-col items-center justify-center`}
        >
          <Timer gameId={activeGameId} playerId={playerId} />
        </div>
      </div>
    </div>
  );
};

export default ActivePlayer;
