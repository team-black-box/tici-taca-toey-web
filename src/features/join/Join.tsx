import React, { useState } from "react";
import { extractValueAndSet } from "../../common/extractValueAndSet";
import { useDispatch } from "react-redux";
import { joinGame, spectateGame } from "../../redux/actions";

const Join = () => {
  const [gameId, setGameId] = useState("");
  const clearGameId = () => setGameId("");
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2 grid-rows-2 mx-4 gap-4 pb-4">
      <div className="row-span-1 col-span-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Link / Game ID
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter Link / Game Id"
          onChange={extractValueAndSet(setGameId)}
          value={gameId}
        />
      </div>
      <div className="row-span-1 col-span-1 mx-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm"
          onClick={() => {
            dispatch(joinGame(gameId));
            clearGameId();
          }}
        >
          Join
        </button>
      </div>
      <div className="row-span-1 col-span-1 mx-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm"
          onClick={() => {
            dispatch(spectateGame(gameId));
            clearGameId();
          }}
        >
          Spectate
        </button>
      </div>
    </div>
  );
};

export default Join;
