import React from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { useHistory } from "react-router-dom";
import google from "../images/google.png";

export default function LoginPage() {
  const history = useHistory();

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
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const body = JSON.stringify(user);
      const auth_response = await axios.post("/api/auth/google", body, config);
      localStorage.setItem("token", auth_response.data.token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="h-screen gap-4 bg-green-500 flex flex-col justify-center items-center text-center">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-600 drop-shadow-xl">
          Trash Go
        </h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            signInWithGoogle();
          }}
          type="button"
          className="text-4xl flex items-center gap-4 shadow-xl focus:outline-none text-white transition bg-green-900 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-6 py-4 mr-2 mb-2 "
        >
          <img src={google} alt="google" className="inline w-12 h-12" />
          Log in
        </button>
      </main>
    </>
  );
}
