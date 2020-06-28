import React from "react";
import { useSelector } from "react-redux";
import {
  getActiveGamePlayers,
  getActiveGameSpectator,
} from "../../../redux/games";
import ActivePlayer from "./ActivePlayer";
import Spectator from "./Spectator";

const Players = () => {
  const players = useSelector(getActiveGamePlayers);
  const spectators = useSelector(getActiveGameSpectator);
  return (
    <div className="grid grid-rows-1 grid-cols-1">
      <div className="cols-span-1 rows-span-1 my-4">
        Players
        <div className="w-full flex flex-row">
          {players.map((each: string) => (
            <ActivePlayer key={each} playerId={each} players={players} />
          ))}
        </div>
      </div>
      <div className="cols-span-1 rows-span-1 my-4">
        {spectators.map((each: string) => (
          <Spectator key={each} playerId={each} players={players} />
        ))}
      </div>
    </div>
  );
};

export default Players;
