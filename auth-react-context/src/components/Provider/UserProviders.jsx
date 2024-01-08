import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const UserContext = createContext(null);

const auth = getAuth(app);

const UserProviders = ({ children }) => {
    // const [user, setUser] = useState(null);
   
   
   
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
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const userInfo = {
        createUser,
        userLogin
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProviders;