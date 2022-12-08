import React from "react";
import { getAllGames } from "../../../redux/games";
import { useSelector } from "react-redux";
// import { TimerBase } from "../../../common/model";

const Timer = (props: any) => {
  const game = useSelector(getAllGames)[props.gameId];
  const timers = game.timers;

  return (
    <div className="flex flex-col">
      {Object.values(timers).map((timer: any) => {
        return <text>{Math.max(0, timer.timeLeft / 1000)}</text>;
      })}
    </div>
  );
};

export default Timer;
