import React, { useState } from "react";
import { extractValueAndSet } from "../../common/extractValueAndSet";
import { useDispatch } from "react-redux";
import { joinGame, spectateGame } from "../../redux/actions";
import { GameInteractionTypes } from "../../common/model";

const getGameIdAndInteractionType = (url: string) => {
  const uriComponents = url.split("/");
  if (uriComponents.length === 5) {
    return {
      type: uriComponents[3],
      gameId: uriComponents[4],
    };
  }
};

const Join = () => {
  const [url, setUrl] = useState("");
  const clearGameId = () => setUrl("");
  const dispatch = useDispatch();

  const gameIdAndType = getGameIdAndInteractionType(url);

  return (
    <div className="grid grid-cols-2 grid-rows-2 mx-4 gap-4 pb-4">
      <div className="row-span-1 col-span-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Join / Spectate Game
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter game link"
          onChange={extractValueAndSet(setUrl)}
          value={url}
        />
      </div>
      {gameIdAndType?.type && (
        <div className="row-span-1 col-span-2 mx-1 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-xl"
            onClick={() => {
              if (gameIdAndType?.type && gameIdAndType?.gameId) {
                if (gameIdAndType.type === GameInteractionTypes.PLAY) {
                  dispatch(joinGame(gameIdAndType.gameId));
                } else if (
                  gameIdAndType.type === GameInteractionTypes.SPECTATE
                ) {
                  dispatch(spectateGame(gameIdAndType.gameId));
                }
              }
              clearGameId();
            }}
          >
            {gameIdAndType?.type === GameInteractionTypes.PLAY
              ? "Join"
              : gameIdAndType?.type === GameInteractionTypes.SPECTATE
              ? "Spectate"
              : "Join / Spectate"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Join;
