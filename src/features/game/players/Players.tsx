import React from "react";
import { useSelector } from "react-redux";
import {
  getActiveGamePlayers,
  getActiveGameSpectator,
  getActiveGameTurn,
} from "../../../redux/games";
import ActivePlayer from "./ActivePlayer";
import Spectator from "./Spectator";

const Players = () => {
  const players = useSelector(getActiveGamePlayers);
  const spectators = useSelector(getActiveGameSpectator);
  const turn = useSelector(getActiveGameTurn);
  return (
    <div className="grid grid-rows-1 grid-cols-1">
      <div className="cols-span-1 rows-span-1 my-4">
        Players
        <div className="w-full flex flex-row">
          {players.map((each: string) => (
            <ActivePlayer
              key={each}
              playerId={each}
              players={players}
              turn={turn}
            />
          ))}
        </div>
      </div>
      {spectators.length > 0 && (
        <div className="cols-span-1 rows-span-1 my-4">
          Spectators
          <div className="w-full flex flex-row m-2">
            {spectators.map((each: string) => (
              <Spectator key={each} playerId={each} players={players} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Players;
