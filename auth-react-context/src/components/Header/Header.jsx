import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link style={{ marginLeft: "20px" }} to="/Login">Login</Link>
            <Link style={{ marginLeft: "20px" }} to="register">Register</Link>
        </nav>
    );
};

export default Header;