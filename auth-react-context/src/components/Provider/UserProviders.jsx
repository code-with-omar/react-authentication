import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const UserContext = createContext(null);

const auth = getAuth(app);

const UserProviders = ({ children }) => {
    const [user, setUser] = useState(null);



    /**
     * create new user
     */
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /**
     * 
     *User login 
     */
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    /**
     * User Logout
     */
    const logOut = () => {
        return signOut(auth);
    }

    //observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('auth state change', currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe;
        }
    }, [])
    const userInfo = {
        user,
        createUser,
        userLogin,
        logOut,

    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProviders;