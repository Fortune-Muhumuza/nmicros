import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log('user is', user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }





    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" name="name" required onChange={handleEmailChange}/>
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="password" required onChange={handlePasswordChange} />
                </div>
                <div className="button-container">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>
        </div>
    );
}