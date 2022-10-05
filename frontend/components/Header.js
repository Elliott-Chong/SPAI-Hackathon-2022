import React from "react";
import { CameraIcon, MapIcon, Bars4Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useGlobalContext } from "../context";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const { state, dispatch } = useGlobalContext();

  React.useEffect(() => {
    let yes = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "set_user", payload: user });
      } else {
        window.location.href = "/";
      }
    });
    return yes;
  }, []);

  return (
    <nav className="absolute top-100 right-0 left-0 bg-green-600 flex items-center justify-between px-4 py-2 z-10">
      <Link href="/camera">
        <CameraIcon className="w-12 h-12" />
      </Link>
      <a
        onClick={(e) => {
          e.preventDefault();
          signOut(auth);
          dispatch({ type: "logout" });
          location = "/";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-box-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
          />
          <path
            fillRule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
      </a>
    </nav>
  );
};

export default Header;
