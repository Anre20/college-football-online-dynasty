import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/user');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, loading }}>
      {children}
    </UsersContext.Provider>
  );
};
