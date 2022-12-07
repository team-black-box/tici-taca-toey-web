import React, { useEffect } from "react";
import { getActiveGameTurn, getAllGames } from "../../../redux/games";
import { useSelector } from "react-redux";
import { GameStatus } from "../../../common/model";

const Timer = (props: any) => {
  const game = useSelector(getAllGames)[props.gameId];
  const timers = game.timers;

  console.log(Object.values(timers));

  const timersDisplay = Object.values(timers).map((timer: any) => {
    return <text>{timer.timeLeft}</text>;
  });

  return <div className="flex flex-col">{timersDisplay}</div>;
};

export default Timer;
