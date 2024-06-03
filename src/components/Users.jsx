import getUsers from "../apis/getUsers";
import { useState, useEffect } from "react";
import User from "../components/User";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div className="users-list">
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p>No users</p>
      )}
    </div>
  );
};

export default Users;
