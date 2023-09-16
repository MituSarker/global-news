import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth =getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo ={user,providerLogin,logOut,signIn,createUser,loading};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;