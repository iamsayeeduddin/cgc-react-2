import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const UserList = () => {
  // const users = [
  //   { id: 1, name: "John Doe", email: "john@example.com" },
  //   { id: 2, name: "Jane Smith", email: "jane@example.com" },
  //   { id: 3, name: "Mike Johnson", email: "mike@example.com" },
  //   { id: 4, name: "Emily Davis", email: "emily@example.com" },
  // ];
  const val = useContext(DataContext);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [username, setUserName] = useState("");

  useEffect(() => {
    // fetch("https://api.github.com/users")
    //   .then((res) => res.json())
    //   .then((res2) => setUsers(res2))
    //   .catch((err) => console.error(err));

    const inter = setInterval(() => console.log("Interval in useEffect"), 2000);

    return () => {
      clearInterval(inter);
    };
  }, []);

  useEffect(() => {
    if (username) {
      var timeOut = setTimeout(() => {
        fetch(`https://api.github.com/users/${username}`)
          .then((res) => res.json())
          .then((res2) => setUser(res2))
          .catch((err) => console.error(err));
      }, 800);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [username]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">User List {val.value}</h2>
      <ul className="space-y-3 flex gap-4 flex-wrap">
        {users.map((user) => (
          <li key={user.id} className="p-3 border rounded-lg shadow-sm hover:bg-gray-100 transition">
            <p className="font-semibold">{user.login}</p>
            <img className="w-8 h-8 rounded-full" src={user.avatar_url} />
          </li>
        ))}
      </ul>
      <div className="space-y-3 flex gap-4 flex-wrap">
        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
        <ul className="space-y-3 flex gap-4 flex-wrap">
          {user?.login ? (
            <li key={user.id} className="p-3 border rounded-lg shadow-sm hover:bg-gray-100 transition">
              <p className="font-semibold">{user.login}</p>
              <img className="w-8 h-8 rounded-full" src={user.avatar_url} />
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
