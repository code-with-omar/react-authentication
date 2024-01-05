import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";


const auth = getAuth(app);

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Error message
    const [error, setError] = useState('');
    // Success Message
    const [success, setSuccess] = useState('');
    // Way One: apply onchange handler
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    // Way Two : Apply onBlue event handler
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        // console.log(event.target.value);
    }
    // way number three: onSubmit
    const handleSubmitForm = (event) => {
        setSuccess('')
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log({email,password});

        //Validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least One uppercase');
            return;
        } else if (!/(?=.*[a-z])/.test(password)) {
            setError('Please add at least one lowercase');
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please add at least one digit');
            return;
        } else if (password.length < 6) {
            setError('Please password at least 6 digits');
            return;
        }

        //Note: Firebase createUserWithEmailAndPassword authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                // if user auth create then setSuccess state and error make empty
                setSuccess('Create user has been successfull');
                setError('')
            }).catch(error => {
                console.error(error);
                const errorMessage = error.message;
                setError(errorMessage)
            })

    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>This is register page</h2>
            {/* {Way number 3: use onSubmit event handler} */}
            <form onSubmit={handleSubmitForm}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Your Email" /> <br />
                <input onBlur={handlePasswordChange} type="password" name="password" id="password" placeholder="Your password" /> <br />
                <input type="submit" value="register" />
                <p>{error}</p>
                <p>{success}</p>
            </form>
        </div>
    );
};

export default Register;