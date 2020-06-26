import React from "react";
import Identicon from "identicon.js";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentPlayerName } from "../../redux/currentPlayer";
import { updateCurrentPlayerName } from "../../redux/actions";

interface PersonaPropTypes {
  name: string;
}

const Player = () => {
  const name = useSelector(getCurrentPlayerName);
  const dispatch = useDispatch();

  var identicon = new Identicon(
    new Buffer(`${name}ticitacatoeyhash`).toString("hex"),
    64
  ).toString();

  return (
    <div className="flex flex-row-reverse ">
      <img src={`data:image/jpeg;base64,${identicon}`} alt="identicon" />
      <input
        className="uppercase py-2 px-4 text-gray-700 text-2xl text-right outline-none focus:shadow-outline"
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
