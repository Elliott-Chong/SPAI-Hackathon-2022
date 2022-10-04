import Head from "next/head";
import React from "react";
import { auth } from "../firebase";
import Link from "next/link";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useGlobalContext } from "../context";
import { UserCircleIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

function Navbar() {
  const { dispatch, state } = useGlobalContext();
  React.useEffect(() => {
    let yes = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "set_user", payload: user });
      }
    });
    return yes;
  }, []);
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response);
      dispatch({ type: "set_user", payload: response.user });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>A Unicorn&apos;s Treasure</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="font-mono border-t-2 border-gray-600 fixed w-full bottom-0 flex justify-center gap-4 items-center px-2 py-4">
        <Link href="/inventory">
          <a className="btn nice-hover">
            <Squares2X2Icon className="w-10 h-10" />
          </a>
        </Link>
        <Link href="/" id="logo">
          <h1 className="text-2xl nice-hover m-0 rounded-full cursor-pointer w-12 h-12 grid place-items-center border-4 border-gray-900">
            S
          </h1>
        </Link>
        {!state.user ? (
          <>
            <a
              onClick={(e) => {
                e.preventDefault();
                signInWithGoogle();
              }}
              className="btn nice-hover"
            >
              <UserCircleIcon className="w-10 h-10" />
            </a>
          </>
        ) : (
          <>
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut(auth);
                dispatch({ type: "logout" });
              }}
              className="btn nice-hover "
            >
              <UserCircleIcon className="w-10 h-10" />
            </a>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
