import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
  // logic that creates a user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
// logout functionality
  const logout= () => {
    return signOut(auth)
  }
//   accessing the user;
useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    return () => {
        unsub();
    }
}, [])

  return (
    <UserContext.Provider value={{ createUser, logout , user}}>
      {children}
    </UserContext.Provider>
  );
};
//create a function that makes the user context available globally to any access
export const useAuth = () => {
  return useContext(UserContext);
};
