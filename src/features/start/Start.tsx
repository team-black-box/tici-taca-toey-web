import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentlyPlayingGames } from "../../redux/currentPlayer";
import { startGame } from "../../redux/actions";
import { GameInteractionTypes } from "../../common/model";

const extractValueAndSetName = (setter: any) => (event: any) =>
  setter(event.target.value);

const interact = (type: string, gameId: string) => () =>
  window.open(`/${type}/${gameId}`, "_blank");

const Start = () => {
  const [name, setName] = useState("My Amazing Game");
  const [boardSize, setBoardSize] = useState(3);
  const [playerCount, setPlayerCount] = useState(2);
  const currentlyPlaying: string[] = useSelector(getCurrentlyPlayingGames);

  const dispatch = useDispatch();

  const startGameDelegate = () => {
    dispatch(startGame(name, boardSize, playerCount));
    setName("");
    setBoardSize(3);
    setPlayerCount(2);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 mx-4 gap-4 pb-4 border-b-4">
      <div className="row-span-1 col-span-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Game name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter name for game"
          value={name}
          onChange={extractValueAndSetName(setName)}
        />
      </div>
      <div className="row-span-1 col-span-1 my-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Board Size
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Board size"
          max={12}
          min={2}
          value={boardSize}
          onChange={extractValueAndSetName(setBoardSize)}
        />
      </div>
      <div className="row-span-1 col-span-1 my-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Players
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Players"
          value={playerCount}
          min={2}
          max={10}
          onChange={extractValueAndSetName(setPlayerCount)}
        />
      </div>
      {currentlyPlaying.length === 0 && (
        <div className="row-span-1 col-span-2 m-auto">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-2xl"
            onClick={startGameDelegate}
          >
            Start new game
          </button>
        </div>
      )}
      {currentlyPlaying.length > 0 && (
        <div className="row-span-1 col-span-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-md"
            onClick={interact(
              GameInteractionTypes.PLAY,
              currentlyPlaying[currentlyPlaying.length - 1]
            )}
          >
            Join Game
          </button>
        </div>
      )}
      {currentlyPlaying.length > 0 && (
        <div className="row-span-1 col-span-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-md"
            onClick={interact(
              GameInteractionTypes.SPECTATE,
              currentlyPlaying[currentlyPlaying.length - 1]
            )}
          >
            Spectate Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Start;
