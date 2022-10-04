import React from "react";
import { auth } from "../firebase";
import { useGlobalContext } from "../context";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

export default function Home(){
  const { state, dispatch } = useGlobalContext();

  React.useEffect(() => {
    if(state.user){
      location.href="/map"
    }
  }, [state.user])

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

  return(
    <>
      <main className="h-screen font-poppinsMedium flex flex-col justify-center items-center text-center" style={{backgroundColor: "rgb(172, 225, 138)"}}>
        <h1 className="text-8xl mb-6">Trash Go</h1>
          <button 
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
            type="button" class="text-4xl focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            START
          </button>
      </main>
    </>
  )
}