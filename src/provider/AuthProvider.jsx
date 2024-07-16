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


    // all sign in and login
    const userCreate = async (email, password, number) => {
        const data = {email,password,number}
        // setLoading(true)
        const signUp = await axiosPublic.post('/user',data )
        return signUp;
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return 
    }
    
    // logout
    const logout = () => {
        
    }
    

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)


            // TODO: enable if and else
            // if (currentUser) {
            //     // check user and fetch data
            //     const userData = { email: currentUser?.email }
            //     axiosPublic.post('/jwt', userData)
            //         .then(res => {
            //             if (res.data.token) {
            //                 localStorage.setItem('access-token', res.data.token)
            //                 setLoading(false)
            //             }
            //         })
            // } else {
            //     // TODO: remove token 
            //     localStorage.removeItem('access-token')
            //     setLoading(false)
            // }

            console.log("currentUser", currentUser);

        })
        return () => {
            return unSubscribe()
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        userCreate,
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