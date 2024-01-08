import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Provider/UserProviders";

const Login = () => {
    const emailField = useRef('');
    const passwordField = useRef('');
    //Import from userProviders.jsx
    const { userLogin } = useContext(UserContext);
    const handleLogin = (e) => {
        e.preventDefault()
        const email = emailField.current.value;
        const password = passwordField.current.value;
        userLogin(email, password)
            .then((result => {
                console.log('Log In')
            })).catch(e => {
                console.log(e.message);
            })
        // console.log({email,password})
    }
    return (
        <div>
            <h2>Please Login</h2>
            <form >
                <input type="email" name="email" placeholder="Enter your email" ref={emailField} required /> <br />
                <input type="password" name="password" ref={passwordField} required /> <br />
                <input onClick={handleLogin} type="submit" value="Login" />
            </form>
            <p>If you do not have any account, Go <Link to="/register">register</Link></p>
        </div>
    );
};

export default Login;