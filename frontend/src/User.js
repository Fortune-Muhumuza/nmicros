import React, { useState } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from './Firestore';

function User() {

    const [email, setEmail] = useState("")
    const [fullname, setFullname] = useState('')


   const updateFullname = e => {
      setFullname(e.target.value)
    }

    
    const updateEmail = e => {
       setEmail(e.target.value)
    }

    const addUser = async e => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "users"), {
                fullname: fullname,
                email: email
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setFullname('')
        setEmail('')
    };

 
        return (
            <form onSubmit={addUser}>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    onChange={updateFullname}
                    value={fullname}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={updateEmail}
                    value={email}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }

export default User;