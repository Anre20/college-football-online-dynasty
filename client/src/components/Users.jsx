import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../context/UserContext';
import './Users.css';

const Users = () => {
  const { users, loading } = useContext(UsersContext);
  const [sortedUsers, setSortedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setSortedUsers(sorted);
  }, [users]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleUserChange = (event) => {
    const selectedUserId = event.target.value;
    if (selectedUserId) {
      navigate(`/users/${selectedUserId}`);
    }
  };

  return (
    <div className="users-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Users</h1>
        <select onChange={handleUserChange} defaultValue="">
          <option value="" disabled>Select a coach</option>
          {sortedUsers.map((user) => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Users;
