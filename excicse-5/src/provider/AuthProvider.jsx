import { createContext, useContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Correct context creation
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const singoutUser = () =>{
    setLoader(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false)
    });
    return () => {
      unSubscriber();
    };
  }, []);

  const authInfo = { user,loader, createUser, loginUser, singoutUser };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
