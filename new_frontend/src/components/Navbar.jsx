import React from "react";
import { CameraIcon, MapIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import treasure_chest from "../images/chest.png";
import leaderboard from "../images/leaderboard.png";

const Navbar = () => {
  return (
    <nav className="absolute bottom-0 right-0 left-0 bg-green-600 flex items-center justify-between px-7 py-5 z-10">
      <Link to="/">
        <MapIcon className="w-10 h-10 cursor-pointer" />
      </Link>
      <Link to="/camera">
        <CameraIcon className="w-10 h-10 cursor-pointer" />
      </Link>
      <Link to="inventory" className="cursor-pointer">
        <img
          src={treasure_chest}
          alt="treasure chest"
          className="w-10 h-10 cursor-pointer"
        />
      </Link>
      <Link to="/leaderboard" className="cursor-pointer">
        <img
          src={leaderboard}
          alt="leaderboard"
          className="w-10 h-10 cursor-pointer"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
