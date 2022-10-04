import React from "react";
import Navbar from "../components/Navbar";

export default function Home(){
  return(
    <>
      <Navbar/>
      <main className="h-screen font-poppins-medium" style={{backgroundColor: "rgb(172, 188, 138)"}}>
        <h1 className="text-6xl">Trash Go</h1>
      </main>
    </>
  )
}