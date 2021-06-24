import React, { useState } from "react"
import axios from 'axios'
import { useEffect } from 'react'
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

    const getData = () => {
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
                    <p><Link to={"/group/" + group.groupName}>{group.groupName}</Link></p>
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
