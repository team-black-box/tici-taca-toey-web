import React from "react";
import { getAllGames } from "../../../redux/games";
import { useSelector } from "react-redux";

const Timer = (props: any) => {
  const game = useSelector(getAllGames)[props.gameId];
  const timers = game.timers;
  return (
    <div className="flex flex-col">
      {Object.entries(timers)
        .filter(([key, timer]) => key === props.playerId)
        .map(([key, timer]: any) => {
          return (
            <text className={key === game.turn ? "text-red-900" : ""}>
              {Math.max(0, timer.timeLeft / 1000)}
            </text>
          );
        })}
    </div>
  );
};

export default Timer;
