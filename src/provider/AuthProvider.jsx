import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const user = null;
    const auhInfo ={

        user
    }
    return (
        <AuthContext.Provider value={auhInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;