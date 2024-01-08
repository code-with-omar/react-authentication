import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Provider/UserProviders';
const Register = () => {
    const { createUser } = useContext(UserContext)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            }).catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <h2>Please register first</h2>
            <form onSubmit={handleRegister}>
                <input type="Name" name="Name" placeholder="Enter your Name" required /> <br />
                <input type="email" name="email" placeholder="Enter your email" required /> <br />
                <input type="password" name="password" required /> <br />
                <input type="submit" value="Login" />
            </form>
            <p>If have already register ,<Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;