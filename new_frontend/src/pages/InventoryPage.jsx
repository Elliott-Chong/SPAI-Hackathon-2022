import React from "react";
import { useGlobalContext } from "../context";

const InventoryPage = () => {
  const { state } = useGlobalContext();
  const { user } = state;
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>
        <h1 className="text-2xl font-bold">Inventory</h1>
        {user.inventory.map((item, idx) => {
          return (
            <p key={idx}>
              {item.name} - {item.count}
            </p>
          );
        })}
      </div>

      <hr />
      <div>
        <h1 className="text-2xl font-bold">Treasured</h1>
        {user.treasured.map((item, idx) => {
          return (
            <p key={idx}>
              {item.name} - {item.count}
            </p>
          );
        })}
      </div>
    </main>
  );
};

export default InventoryPage;
