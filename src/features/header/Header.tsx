import React from "react";
import Brand from "./brand/Brand";
import Persona from "../player-persona/Player";
import logo from "../../common/logo.png";

const Header = () => {
  return (
    <div className="grid grid-cols-4 m-4">
      <div className="col-start-1 col-span-1">
        <div className="flex flex-row">
          <img className="h-12 w-12 mr-2" src={logo} alt="ChitChat Logo" />{" "}
          <Brand />
        </div>
      </div>
      <div className="col-end-5 col-span-2">
        <Persona />
      </div>
    </div>
  );
};

export default Header;
