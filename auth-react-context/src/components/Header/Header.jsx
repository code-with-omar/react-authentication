import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Provider/UserProviders";

const Header = () => {
    const { user, logOut } = useContext(UserContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            }).catch(error => console.log(error));
    }
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link style={{ marginLeft: "20px" }} to="/orders">Orders</Link>
            <Link style={{ marginLeft: "20px" }} to="/Login">Login</Link>
            <Link style={{ marginLeft: "20px" }} to="register">Register</Link>
            {user ? <>
                <span>{user.email}</span> <button onClick={handleLogOut}>SignOut</button>
            </> : <></>}
        </nav>
    );
};

export default Header;