import {  useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { GoogleAuthProvider, User, signInWithPopup, } from "firebase/auth";
import { auth } from "../../shared/services/Firebase";
import { useNavigate } from "react-router-dom";

export const AuthProvider = (props: any) => {
    const { children } = props;
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();

    useEffect(() => {
        const loginStatus = localStorage.getItem('loginStatus');
        if (loginStatus) {
            setIsAuthenticated(false);
            const useDetails = localStorage.getItem('userDetails');
            if (useDetails) {
                setUser(JSON.parse(useDetails));
            }
        } else {
            setIsAuthenticated(true);
        }
    }, [])


    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const authResponse = await signInWithPopup(auth, provider);
            if (authResponse?.user) {
                setUser(authResponse.user);
                localStorage.setItem('userDetails', JSON.stringify(authResponse.user));
            }
            if (authResponse?.user?.emailVerified) {
                setIsAuthenticated(true);
                localStorage.setItem('loginStatus', JSON.stringify(authResponse?.user?.emailVerified));
            } else {
                setIsAuthenticated(false);
            }

            if (authResponse) {
                navigate('/home');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('loginStatus');
        localStorage.removeItem('userDetails');
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ googleSignIn, isAuthenticated, logout }}>{children}</AuthContext.Provider>
    )
}


