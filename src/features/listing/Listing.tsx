import React from "react";
import GameTile from "./GameTile";
import { useSelector } from "react-redux";
import {
  getCurrentlyPlayingGames,
  getCurrentlySpectatingGames,
} from "../../redux/currentPlayer";

const Listing = () => {
  const allGames = [
    ...useSelector(getCurrentlyPlayingGames),
    ...useSelector(getCurrentlySpectatingGames),
  ];
  return (
    <div>
      Active Games
      {allGames.map((each) => (
        <GameTile gameId={each} key={each} />
      ))}
    </div>
  );
};

export default Listing;
