import { createContext, useState } from "react";

export const AuthContex = createContext(null)
const AuthProvider = ({children}) => {
    const[user, setUser] = useState(1000);

    const authInfo={user}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;