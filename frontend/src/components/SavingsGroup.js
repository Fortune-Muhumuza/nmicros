import React, { useState } from "react"
import axios from 'axios'
import { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firestore';
import { Link } from 'react-router-dom';

function SavingsGroup() {
    const [group, setGroup] = useState([])
    const [enteredGroup, setEnteredGroup] = useState("")

    function handleChange(e) {
        setEnteredGroup(e.target.value)
    }

    function handleSubmit(e) {
        const enteredData = {
            groupName: enteredGroup
        };

        axios.post('http://localhost:4000/group', enteredData)
        e.preventDefault()
        window.location = '/'
    }

    const getData = async () => {

             //fetch data from google firebase firestore
             const querySnapshot = await getDocs(collection(db, "savingsGroups"));
             querySnapshot.forEach((doc) => {
                 const data = doc.data()
                 //console.log(JSON.stringify(data))
                 //console.log('groups are',data)
              
                 setGroup((prevState) => {
                     return [...prevState, data];
                   });
             });

             
             return

        axios.get(`http://localhost:4000/group`)
            .then(res => {
                const group = res.data;
                setGroup(group)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h3>Savings Groups</h3>
            {group?
            <ul>
                {group.map(group => (
                    <p><Link to={"/group/" + group.Name}>{group.Name}</Link></p>
                ))}
            </ul> : <p>No groups available yet</p>
                
                
}


<br></br>

            <div className="form-group">
                <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="New group" type="text"
                    onChange={handleChange}
                    />
                <button className="primary-btn">Create group</button>
                </form>
            </div>
        </div>
    )
}

export default SavingsGroup
