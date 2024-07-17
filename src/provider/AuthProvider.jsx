import { createContext, useEffect, useState } from "react";
import { getAuth} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from '../hooks/useAxiosPublic'
// test
import { jwtDecode } from "jwt-decode";
import { useNavigate, useNavigation } from "react-router-dom";



export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


// login user
    const loginUser = async (email, password) => {
        // loading
        setLoading(true)
        const result = await axiosPublic.post(`/user?email=${email}&password=${password}`);
        if (result.data.token) {
        // লোকাল স্টোরেজে টোকেন সংরক্ষণ
        localStorage.setItem('token', result.data.token);
        // JWT টোকেন ডিকোড করা
        const decodedTokenBB = jwtDecode(result.data.token);
        console.log(decodedTokenBB);
        setUser(decodedTokenBB);
        return result;
    }
    };
    // লোকাল স্টোরেজ থেকে টোকেন নিয়ে ডিকোড করা এবং স্টেট আপডেট করা
    const checkUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
    };

    useEffect(() => {
        checkUser();
    }, []);
    // logout
    // const logoutUser = () => {
    //     localStorage.removeItem('token');
    //     setUser(null);
    //     console.log('User logged out');
    // };


    const authInfo = {
        user,
        loading,
        setUser,
        loginUser,
        // logoutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;