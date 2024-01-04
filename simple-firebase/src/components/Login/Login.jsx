import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase";
import { useState } from "react";
const Login = () => {
    const [user,setUser]=useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleLogIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const userLogin = result.user;
                setUser(userLogin);
                console.log(userLogin)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={handleLogIn}>Google Login</button>
            {
                user && 
                <div>
                    <h3>User Name : {user.displayName}</h3>
                    <h3>Email : {user.email}</h3>
                    <img src={user.photoUrl} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;