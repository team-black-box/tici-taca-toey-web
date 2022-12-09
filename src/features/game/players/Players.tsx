import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  getActiveGamePlayers,
  getActiveGameSpectator,
  getActiveGameTurn,
} from "../../../redux/games";
import { getCurrentPlayerId } from "../../../redux/currentPlayer";
import ActivePlayer from "./ActivePlayer";
import Spectator from "./Spectator";
import { JsxElement } from "typescript";

const Players = () => {
  const players = useSelector(getActiveGamePlayers);
  const spectators = useSelector(getActiveGameSpectator);
  const currentPlayer: string = useSelector(getCurrentPlayerId);
  const turn = useSelector(getActiveGameTurn);

  const currentPlayerCard: ReactElement[] = [];
  const restPlayers: ReactElement[] = [];

  (() => {
    players.forEach((each: string) => {
      if (each === currentPlayer) {
        currentPlayerCard.push(
          <ActivePlayer
            key={each}
            playerId={each}
            players={players}
            turn={turn}
          />
        );
      } else {
        restPlayers.push(
          <ActivePlayer
            key={each}
            playerId={each}
            players={players}
            turn={turn}
          />
        );
      }
    });
  })();

  return (
    <div className="grid grid-rows-1 grid-cols-1">
      <div className="cols-span-1 rows-span-1 my-4">
        <div className="flex flex-row gap-2">
          <div className="flex flex-row justify-start items-center">
            {currentPlayerCard}
            <span
              className="bg-black m-1"
              style={{ height: "100%", width: `0.3rem` }}
            ></span>
          </div>
          <div className="w-full flex flex-row gap-1 justify-end">
            {restPlayers}
          </div>
        </div>
      </div>
      {spectators.length > 0 && (
        <div className="cols-span-1 rows-span-1 my-4">
          Spectators
          <div className="w-full flex flex-row m-2">
            {spectators &&
              spectators.map((each: string) => (
                <Spectator key={each} playerId={each} players={players} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Players;
