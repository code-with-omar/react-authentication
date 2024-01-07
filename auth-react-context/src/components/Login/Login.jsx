import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <form>
                <input type="email" name="email" placeholder="Enter your email" required/> <br />
                <input type="password" name="password" required /> <br />
                <input type="submit" value="Login" />
            </form>
            <p>If you do not have any account, Go <Link to="/register">register</Link></p>
        </div>
    );
};

export default Login;