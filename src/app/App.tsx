import React, { useEffect } from "react";
import Header from "../features/header/Header";
import Start from "../features/start/Start";
import Game from "../features/game/Game";
import Join from "../features/join/Join";
import Listing from "../features/listing/Listing";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentlyPlayingGames,
  isConnectedToServer,
  getActiveGameId,
  getActiveGameMode,
} from "../redux/currentPlayer";
import { joinGame, spectateGame } from "../redux/actions";
import { GameInteractionTypes } from "../common/model";

export default function App() {
  const { type, gameId } = useParams();
  const currentlyPlayingGames = useSelector(getCurrentlyPlayingGames);
  const isConnected = useSelector(isConnectedToServer);
  const dispatch = useDispatch();

  const activeGame = useSelector(getActiveGameId);
  const activeGameMode = useSelector(getActiveGameMode);
  const history = useHistory();

  useEffect(() => {
    if (activeGame && activeGameMode) {
      history.push(`/${activeGameMode}/${activeGame}`);
    }
  }, [activeGame, activeGameMode, history]);

  // useEffect(() => {
  //   if (isConnected) {
  //     if (type && gameId) {
  //       if (!currentlyPlayingGames.includes(gameId) && gameId !== activeGame) {
  //         switch (type) {
  //           case GameInteractionTypes.PLAY:
  //             dispatch(joinGame(gameId));
  //             history.push(`/${GameInteractionTypes.PLAY}/${gameId}`);
  //             break;
  //           case GameInteractionTypes.SPECTATE:
  //             dispatch(spectateGame(gameId));
  //             history.push(`/${GameInteractionTypes.SPECTATE}/${gameId}`);
  //             break;
  //           default:
  //             console.log(`Unsupported game interaction type: ${type}`);
  //         }
  //       }
  //     }
  //   }
  // }, [
  //   type,
  //   gameId,
  //   currentlyPlayingGames,
  //   activeGame,
  //   isConnected,
  //   dispatch,
  //   history,
  // ]);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 h-full">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-1 mx-4 col-span-1">
              <Start />
            </div>
            <div className="row-span-1 mx-4 col-span-1 border-t-2 pt-4">
              <Join />
            </div>
          </div>
        </div>
        <div className="col-span-4 mx-auto text-4xl">
          <Game />
        </div>
        <div className="col-span-1 text-2xl mr-2">
          <Listing />
        </div>
      </div>
    </div>
  );
}
