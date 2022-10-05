import React from "react";
import { CameraIcon, MapIcon, Bars4Icon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute bottom-0 right-0 left-0 bg-green-600 flex items-center justify-between px-4 py-2 z-10">
      <Link href="/map">
        <MapIcon className="w-8 h-8" />
      </Link>
      <Link href="/camera">
        <CameraIcon className="w-12 h-12" />
      </Link>
      <Link href="inventory" className="cursor-pointer">
        <Bars4Icon className="w-8 h-8" />
      </Link>
    </nav>
  );
};

export default Navbar;
