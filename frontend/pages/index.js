import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home(){
  return(
    <>
      {/* <Navbar/> */}
      <main className="h-screen font-poppinsMedium flex flex-col justify-center items-center text-center" style={{backgroundColor: "rgb(172, 225, 138)"}}>
        <h1 className="text-8xl mb-6">Trash Go</h1>
        <Link href="/camera">
          <button type="button" class="text-4xl focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">START</button>
        </Link>
      </main>
    </>
  )
}