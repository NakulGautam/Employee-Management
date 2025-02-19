

import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
 
  //  localStorage.clear()

  const [userData, setUserData] = useState({
    employees: [],
    admin: []
  });

  useEffect(() => {
    setLocalStorage()
    const { employees} = getLocalStorage() || { employees: []};
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
