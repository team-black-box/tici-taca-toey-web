import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentPlayerName } from "../../redux/currentPlayer";
import { updateCurrentPlayerName } from "../../redux/actions";
import { generateIdenticon } from "../../common/identicon";

interface PersonaPropTypes {
  name: string;
}

const Player = () => {
  const name = useSelector(getCurrentPlayerName);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row-reverse ">
      <img src={generateIdenticon(name)} alt="identicon" />
      <input
        className="uppercase py-2 px-4 text-gray-700 text-2xl text-right outline-none focus:shadow-outline w-1/2"
        type="text"
        value={name}
        onChange={(event) =>
          dispatch(updateCurrentPlayerName(event.target.value))
        }
        placeholder="Enter your handle"
      ></input>
    </div>
  );
};

export default Player;
