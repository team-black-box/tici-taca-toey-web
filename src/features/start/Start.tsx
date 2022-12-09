import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../../redux/actions";
import { extractValueAndSet } from "../../common/extractValueAndSet";

const DEFAULT_GAME_NAME = "My Amazing Game";

const Start = () => {
  const [name, setName] = useState(DEFAULT_GAME_NAME);
  const [boardSize, setBoardSize] = useState(3);
  const [playerCount, setPlayerCount] = useState(2);
  const [timePerPlayer, setTimePerPlayer] = useState(5);
  const [incrementPerPlayer, setIncrementPerPlayer] = useState(1);
  const [winningSequenceLength, setWinningSequenceLength] = useState(3);

  const dispatch = useDispatch();

  const startGameDelegate = () => {
    dispatch(
      startGame(
        name,
        boardSize,
        playerCount,
        winningSequenceLength,
        timePerPlayer,
        incrementPerPlayer
      )
    );
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 mx-4 gap-4 pb-4">
      <div className="row-span-1 col-span-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Game name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter name for game"
          value={name}
          onChange={extractValueAndSet(setName)}
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
          min={3}
          value={boardSize}
          onChange={extractValueAndSet(setBoardSize)}
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
          onChange={extractValueAndSet(setPlayerCount)}
        />
      </div>
      <div className="row-span-1 col-span-1 my-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Time
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Players"
          value={timePerPlayer}
          min={0}
          max={10}
          onChange={extractValueAndSet(setTimePerPlayer)}
        />
      </div>
      <div className="row-span-1 col-span-1 my-2">
        <label className="block text-gray-700 text-sm font-bold">
          Increment
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Players"
          value={incrementPerPlayer}
          min={1}
          max={5}
          onChange={extractValueAndSet(setIncrementPerPlayer)}
        />
      </div>
      <div className="row-span-1 col-span-1 my-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Win Sequence
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Win Sequence"
          max={boardSize}
          min={3}
          value={winningSequenceLength}
          onChange={extractValueAndSet(setWinningSequenceLength)}
        />
      </div>
      <div className="row-span-1 col-span-2 mx-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-xl"
          onClick={startGameDelegate}
        >
          Start new game <i className="fas fa-paper-plane" />
        </button>
      </div>
    </div>
  );
};

export default Start;

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
