import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UsersProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UsersProvider>
      <App />
    </UsersProvider>
  </Router>,
);
