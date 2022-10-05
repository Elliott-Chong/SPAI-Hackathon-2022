import React from "react";
import { auth } from "../firebase";
import { useGlobalContext } from "../context";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function LoginPage() {
  const { dispatch } = useGlobalContext();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      user = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
      dispatch({ type: "SET_USER", payload: user });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="h-screen gap-4 bg-green-600 flex flex-col justify-center items-center text-center">
        <h1 className="text-8xl">Trash Go</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            signInWithGoogle();
          }}
          type="button"
          className="text-4xl focus:outline-none text-white transition bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 "
        >
          Log in
        </button>
      </main>
    </>
  );
}
