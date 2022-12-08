import React from "react";
import { getAllGames } from "../../../redux/games";
import { useSelector } from "react-redux";

const Timer = (props: any) => {
  const game = useSelector(getAllGames)[props.gameId];
  const timers = game.timers;
  return (
    <div className="flex flex-col">
      {Object.values(timers).map((timer: any) => {
        return <text>{timer.timeLeft}</text>;
      })}
    </div>
  );
};

export default Timer;
