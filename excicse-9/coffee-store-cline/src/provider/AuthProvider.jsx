import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email,password) =>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const logInUser = (email,password)=>{
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {user,createUser,logInUser}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;