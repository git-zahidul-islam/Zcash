import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from '../hooks/useAxiosPublic'



export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()



    const loginUser = async (email, password) => {
          const result = await axiosPublic.get(`/user?email=${email}&password=${password}`);
          if (result.data.email) {
            setUser(result.data);
            console.log(result.data);
            return result;
          }
    };

    
    // logout
    const logout = () => {
        
    }
    
    const authInfo = {
        user,
        loading,
        loginUser,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;