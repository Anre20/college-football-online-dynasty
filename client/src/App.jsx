import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import Users from './components/Users';
import Rules from './components/Rules';
import UserDetail from './components/UserDetail';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:year" element={<History />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
