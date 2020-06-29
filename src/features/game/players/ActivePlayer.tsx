import React from "react";
import { getSymbol } from "../../../common/symbol";
import { generateIdenticon } from "../../../common/identicon";
import { useSelector } from "react-redux";
import { getPlayer } from "../../../redux/players";

interface ActivePlayer {
  playerId: string;
  players: string[];
  turn: string;
}

const ActivePlayer = ({ playerId, players, turn }: ActivePlayer) => {
  const symbol = getSymbol(playerId, players);
  const playerName = useSelector(getPlayer(playerId)).name;
  const activePlayerTurn = turn === playerId;
  return (
    <div
      className={`flex flex-col mx-2 ${
        activePlayerTurn && `border-2 border-${symbol.color}-500 rounded-lg`
      }`}
    >
      <div className={`text-${symbol.color}-500 text-center`}>
        {symbol.symbol}
      </div>
      <div className="text-center mx-5">
        <img
          src={generateIdenticon(playerName ? playerName : "", 32)}
          alt="identicon"
        />
      </div>
      {activePlayerTurn && (
        <div
          className={`text-center px-2 py-1 mt-2 text-sm bg-${symbol.color}-500 uppercase text-${symbol.color}-100`}
        >
          Turn
        </div>
      )}
    </div>
  );
};

export default ActivePlayer;
