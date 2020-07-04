import React from "react";
import GameTile from "./GameTile";
import { useSelector } from "react-redux";
import {
  getCurrentlyPlayingGames,
  getCurrentlySpectatingGames,
} from "../../redux/currentPlayer";

const Listing = () => {
  const playing = useSelector(getCurrentlyPlayingGames);
  const spectating = useSelector(getCurrentlySpectatingGames);
  return (
    <div>
      {playing.length > 0 && (
        <div>
          Active Games
          {playing.map((each: string) => (
            <GameTile gameId={each} key={each} />
          ))}
        </div>
      )}
      {spectating.length > 0 && (
        <div className="mt-4">
          Spectating Games
          {spectating.map((each: string) => (
            <GameTile gameId={each} key={each} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listing;
