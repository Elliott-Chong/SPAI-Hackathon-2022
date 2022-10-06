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
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-green-600 rounded-lg p-6 text-2xl font-poppinsMedium text-white">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Recycled
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((person, idx) => {
                    return (
                      <>
                        <tr key={idx}>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {person.name}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {person.score}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
