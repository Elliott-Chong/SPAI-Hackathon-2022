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
      <nav style={{height: '100px'}} className="font-noteworthy flex-row bg-white font-bold flex px-5 md:px-20 py-2 justify-between items-center">
        <Link href="/">
          <h1 className="md:text-3xl m-0 text-l cursor-pointer">
            A Unicorn's Treasure
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
          <Link href="/camera">
            <a className="px-4 py-2 text-center bg-btn-green rounded-md shadow-md hover:shadow-lg cursor-pointer">
              Camera
            </a>
          </Link>
          {!state.user ? (
            <>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signInWithGoogle();
                }}
                className="px-4 py-2 text-center bg-btn-green rounded-md shadow-md hover:shadow-lg cursor-pointer"
              >
                Sign in
              </a>
            </>
          ) : (
            <>
              <Link href="/game">
                <a className="px-4 py-2 hidden md:inline text-center bg-btn-green rounded-md shadow-md hover:shadow-lg cursor-pointer">
                  Game
                </a>
              </Link>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut(auth);
                  dispatch({ type: "logout" });
                }}
                className="px-4 hidden md:inline py-2 text-center bg-btn-green rounded-md shadow-md hover:shadow-lg cursor-pointer"
              >
                Log out
              </a>
            </>
          )}
        </div>
      </nav>
        </div>
  );
}

export default Navbar;
