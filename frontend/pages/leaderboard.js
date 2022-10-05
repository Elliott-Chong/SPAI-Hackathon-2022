import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const data = [
  { name: "Timothy", score: 45 },
  { name: "Elliott", score: 23 },
  { name: "Zhen Yang", score: 14 },
];

const Leaderboard = () => {
  return (
    <>
      <Header />
      <Navbar />
      <table className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-green-600 rounded-lg p-6 text-2xl font-poppinsMedium text-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Recycled</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, idx) => {
            return (
              <>
                <tr key={idx}>
                  <td>{person.name}</td>
                  <td>{person.score}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Leaderboard;
