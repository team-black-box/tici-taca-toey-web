import React from "react";
import { getSymbol } from "../../../common/symbol";

import { PlayerSpectator } from "./ActivePlayer";

const Spectator = ({ playerId, players }: PlayerSpectator) => {
  const symbol = getSymbol(playerId, players);
  return (
    <div className="flex flex-col my-1">
      <div className={symbol.color}>{symbol.symbol}</div>
      <div>{symbol.symbol}</div>
    </div>
  );
};

export default Spectator;
