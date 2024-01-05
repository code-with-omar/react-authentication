import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";


const auth = getAuth(app);

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log({email,password});
        //Note: Firebase createUserWithEmailAndPassword authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
            }).catch(error => {
                console.error(error);
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
            </form>
        </div>
    );
};

export default Register;