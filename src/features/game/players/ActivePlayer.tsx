import React from "react";
import { getSymbol } from "../../../common/symbol";
import { generateIdenticon } from "../../../common/identicon";
import { useSelector } from "react-redux";
import { getPlayer } from "../../../redux/players";

export interface PlayerSpectator {
  playerId: string;
  players: string[];
}

const ActivePlayer = ({ playerId, players }: PlayerSpectator) => {
  const symbol = getSymbol(playerId, players);
  const playerName = useSelector(getPlayer(playerId)).name;
  return (
    <div className="flex flex-col my-1">
      <div className={`${symbol.color} text-center`}>{symbol.symbol}</div>
      <img
        src={generateIdenticon(playerName ? playerName : "")}
        alt="identicon"
      />
    </div>
  );
};

export default ActivePlayer;
