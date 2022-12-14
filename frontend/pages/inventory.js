import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useGlobalContext } from "../context";



const Inventory = () => {
  const { state } = useGlobalContext();

  const { inventory, treasured } = state;

  return (
    <>
      <Header />
      <Navbar />
      <div>
        <div>
          <h1 className="text-2xl font-bold">Inventory</h1>
          {Object.keys(inventory).map((item, idx) => {
            return (
              <p key={idx}>
                {item} - {inventory[item]}
              </p>
            );
          })}
        </div>

        <hr />
        <div>
          <h1 className="text-2xl font-bold">Treasured</h1>
          {Object.keys(treasured).map((item, idx) => {
            return (
              <p key={idx}>
                {item} - {treasured[item]}
              </p>
            );
          })}
        </div>
      </div>
   
    </>
  );
};

export default Inventory;
