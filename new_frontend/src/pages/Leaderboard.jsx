import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/auth/all");
        setUsers(response.data.sort((a, b) => b.points - a.points));
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-green-600 p-6 text-2xl font-poppinsMedium text-white">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-xl font-medium text-white px-6 py-4 text-center"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-xl font-medium text-white px-6 py-4 text-left"
                  >
                    Recycled
                  </th>
                </tr>
              </thead>
              <tbody className="max-h-[60vh] overflow-scroll">
                {users.map((person, idx) => {
                  return (
                    <tr className="text-white" key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-lg font-medium">
                        {person.name}
                      </td>
                      <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                        {person.points}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
