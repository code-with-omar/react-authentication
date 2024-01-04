import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
    const handleLogIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const userLogin = result.user;
                setUser(userLogin);
                console.log(userLogin)
            })
            .catch(error => console.log(error))
    }
    const handleLogInByGitHub = () => {
        signInWithPopup(auth, GitHubProvider)
            .then(result => {
                const gitHubUserLogIn = result.user;
                setUser(gitHubUserLogIn);
                console.log(gitHubUserLogIn);
            }).catch(error => console.log(error))

    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log('logOut complete');
            setUser(null)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>SignOut</button> :
                    <>
                        <button onClick={handleLogIn}>Google Login</button>
                        <button onClick={handleLogInByGitHub}>GitHub Login</button>
                    </>
            }
            {
                user &&
                <div>
                    <h3>User Name : {user.displayName}</h3>
                    <h3>Email : {user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;