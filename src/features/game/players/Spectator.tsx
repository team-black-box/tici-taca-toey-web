import React from "react";
import { useSelector } from "react-redux";
import { getPlayer } from "../../../redux/players";
import { generateIdenticon } from "../../../common/identicon";
export interface Spectator {
  playerId: string;
  players: string[];
}

const Spectator = ({ playerId, players }: Spectator) => {
  const playerName = useSelector(getPlayer(playerId)).name;
  return (
    <div className="text-center mx-5">
      <img
        src={generateIdenticon(playerName ? playerName : "", 32)}
        alt="identicon"
      />
    </div>
  );
};

export default Spectator;
