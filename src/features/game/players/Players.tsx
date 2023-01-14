import React from "react";
import { useSelector } from "react-redux";
import { getActiveGamePlayers, getActiveGameTurn } from "../../../redux/games";
import { getCurrentPlayerId } from "../../../redux/currentPlayer";
import ActivePlayer from "./ActivePlayer";

const Players = () => {
  const players = useSelector(getActiveGamePlayers);
  const currentCurrentPlayerId: string = useSelector(getCurrentPlayerId);
  const turn = useSelector(getActiveGameTurn);

  return (
    <div className="grid grid-rows-1 grid-cols-1">
      <div className="cols-span-1 rows-span-1 mb-4">
        <div className="flex flex-row gap-1 justify-center">
          <div className="flex flex-row items-center">
            <ActivePlayer
              key={currentCurrentPlayerId}
              playerId={currentCurrentPlayerId}
              players={players}
              turn={turn}
            />
            <span
              className="bg-black m-1 order-last"
              style={{ height: "70%", width: `0.18rem`, margin: "1rem" }}
            ></span>
          </div>
          <div className="w-full flex flex-row gap-1">
            {players
              .filter((each: string) => {
                return each !== currentCurrentPlayerId;
              })
              .map((each: string) => {
                return (
                  <ActivePlayer
                    key={each}
                    playerId={each}
                    players={players}
                    turn={turn}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
