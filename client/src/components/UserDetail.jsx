import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../context/UserContext';
import './Users.css';

const UserDetail = () => {
  const { id } = useParams();
  const { users, loading } = useContext(UsersContext);
  const user = users.find(user => user._id === id);

  if (loading) {
    return <p>Loading user...</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="users-page">
      <img className="background-user-image" src={user.stadium} alt={user.name} />
      <div className="content" style={{ color: user.teamFont }}>
      <div className="coach-heading">{user.name}</div>
        <img className="user-logo" src={user.logo} alt={user.name} />
        <p>{user.bio}</p>
        <div className="team-info"></div>
        <span className="teamFont">PSN: {user.psn}</span>
        <p>{user.bio}</p>
        <div className="team-info"></div>
        <span className="teamFont">School: {user.school}</span>
        <p>{user.bio}</p>
        <div className="team-info"></div>
        <span className="teamFont">Team: {user.team}</span>
        <p>{user.bio}</p>
        <div className="team-info"></div>
        <span className="teamFont">Conference: {user.conference}</span>
        <p>{user.bio}</p>
        <div className="team-info"></div>
        <span className="teamFont">Wins: {user.record.wins} Losses: {user.record.losses}</span>
      </div>
    </div>
  );
};

export default UserDetail;
