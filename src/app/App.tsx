import React, { useEffect } from "react";
import "./App.css";

import Header from "../features/header/Header";
import Start from "../features/start/Start";
import Game from "../features/game/Game";
import Join from "../features/join/Join";
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
import logo from "../common/logo.png";

export default function App() {
  const { type, gameId } = useParams();
  const currentlyPlayingGames = useSelector(getCurrentlyPlayingGames);
  const isConnected = useSelector(isConnectedToServer);
  const activeGame = useSelector(getActiveGameId);
  const activeGameMode = useSelector(getActiveGameMode);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isConnected) {
      if (type && gameId) {
        if (!currentlyPlayingGames.includes(gameId) && gameId !== activeGame) {
          switch (type) {
            case GameInteractionTypes.PLAY:
              dispatch(joinGame(gameId));
              history.push(`/${GameInteractionTypes.PLAY}/${gameId}`);
              break;
            case GameInteractionTypes.SPECTATE:
              dispatch(spectateGame(gameId));
              history.push(`/${GameInteractionTypes.SPECTATE}/${gameId}`);
              break;
            default:
              console.log(`Unsupported game interaction type: ${type}`);
          }
        }
      } else {
        if (activeGame && activeGameMode) {
          history.push(`/${activeGameMode}/${activeGame}`);
        }
      }
    }
  }, [
    type,
    gameId,
    currentlyPlayingGames,
    activeGame,
    isConnected,
    dispatch,
    history,
    activeGameMode,
  ]);

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
        <div className="col-span-1 text-2xl">
          Active Games
          <div className="mr-4 mt-2 flex p-6 bg-white rounded-lg shadow-xl cursor-pointer hover:shadow-outline">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div className="ml-6 pt-1">
              <h4 className="text-sm text-gray-900 leading-tight">Playing</h4>
              <p className="text-base text-gray-600 leading-normal">
                My Amazing Game
              </p>
            </div>
          </div>
          <div className="mr-4 mt-2 flex p-6 bg-white rounded-lg shadow-xl cursor-pointer hover:shadow-outline">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div className="ml-6 pt-1">
              <h4 className="text-sm text-gray-900 leading-tight">Playing</h4>
              <p className="text-base text-gray-600 leading-normal">
                My Amazing Game
              </p>
            </div>
          </div>
          <div className="mr-4 mt-2 flex p-6 bg-white rounded-lg shadow-xl cursor-pointer hover:shadow-outline">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div className="ml-6 pt-1">
              <h4 className="text-sm text-gray-900 leading-tight">Playing</h4>
              <p className="text-base text-gray-600 leading-normal">
                My Amazing Game
              </p>
            </div>
          </div>
          <div className="mr-4 mt-2 flex p-6 bg-white rounded-lg shadow-xl cursor-pointer hover:shadow-outline">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div className="ml-6 pt-1">
              <h4 className="text-sm text-gray-900 leading-tight">Playing</h4>
              <p className="text-base text-gray-600 leading-normal">
                My Amazing Game
              </p>
            </div>
          </div>
          <div className="mr-4 mt-2 flex p-6 bg-white rounded-lg shadow-xl cursor-pointer hover:shadow-outline">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div className="ml-6 pt-1">
              <h4 className="text-sm text-gray-900 leading-tight">Playing</h4>
              <p className="text-base text-gray-600 leading-normal">
                My Amazing Game
              </p>
            </div>
          </div>
          <div className="mr-4 mt-2 flex p-6 bg-white rounded-lg shadow-xl cursor-pointer hover:shadow-outline">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div className="ml-6 pt-1">
              <h4 className="text-sm text-gray-900 leading-tight">Playing</h4>
              <p className="text-base text-gray-600 leading-normal">
                My Amazing Game
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
