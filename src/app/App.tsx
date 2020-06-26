import React from "react";
import "./App.css";

import Header from "../features/header/Header";
import Start from "../features/start/Start";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentlyPlayingGames,
  isConnectedToServer,
} from "../redux/currentPlayer";
import { joinGame, spectateGame } from "../redux/actions";
import { GameInteractionTypes } from "../common/model";

export default function App() {
  const { type, gameId } = useParams();
  const currentlyPlayingGames = useSelector(getCurrentlyPlayingGames);
  const isConnected = useSelector(isConnectedToServer);
  const dispatch = useDispatch();

  if (
    type &&
    gameId &&
    isConnected &&
    !currentlyPlayingGames.includes(gameId)
  ) {
    switch (type) {
      case GameInteractionTypes.PLAY:
        dispatch(joinGame(gameId));
        break;
      case GameInteractionTypes.SPECTATE:
        dispatch(spectateGame(gameId));
        break;
      default:
        console.log(`Unsupported game interaction type: ${type}`);
    }
  }

  return (
    <div className="w-full h-full">
      <Header />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 h-full">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-1 mx-4 col-span-1">
              <Start />
            </div>
            <div className="row-span-2 col-span-1"></div>
          </div>
        </div>
        <div className="col-span-5 m-auto text-4xl">GAME AREA</div>
      </div>
    </div>
  );
}
