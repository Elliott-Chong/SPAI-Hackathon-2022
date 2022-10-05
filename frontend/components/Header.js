import React from "react";
import { CameraIcon, MapIcon, Bars4Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
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
  const { user } = state;

  React.useEffect(() => {
    let yes = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "set_user", payload: user });
      }
      //  else {
      //   window.location.href = "/";
      // }
    });
    return yes;
  }, [dispatch]);

  return (
    <nav className="absolute top-100 right-0 left-0 bg-green-600 flex items-center justify-between px-4 py-2 z-10">
      {user ? (
        <Image
          width={40}
          height={40}
          className="rounded-full"
          src={user.photoURL}
          alt="user"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-exclamation-octagon"
          viewBox="0 0 16 16"
        >
          <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      )}
      <h1 className="font-poppinsMedium text-4xl font-bold">Trash Go</h1>
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
