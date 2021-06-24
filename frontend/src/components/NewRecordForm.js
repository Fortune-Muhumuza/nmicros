import React, { useState, useEffect } from 'react'
import axios from 'axios'

function NewRecordForm(props) {
    const [person, setPerson] = useState("")
    const [money, setMoney] = useState(0)
    const [group, setGroup] = useState([])
    const [enteredGroup, setEnteredGroup] = useState("")

    function handleChange(e) {
        setPerson(e.target.value)
    }

    function handleMoneyChange(e) {
        setMoney(e.target.value)
    }

    function handleGroupChange(e) {
        setEnteredGroup(e.target.value)
    }


    function handleSubmit(e) {
        const enteredData = {
            accountName: person,
            moneySaved: money,
            groupName: enteredGroup,
        };

        axios.post('http://localhost:4000/notes', enteredData)
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })

        e.preventDefault()
        window.location = '/'
    }

    const getData = () => {
        axios.get(`http://localhost:4000/group`)
            .then(res => {
                const group = res.data;
                //console.log(group)
                setGroup(group)
            })
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <div>
            <h1>New record</h1>
            <form onSubmit={handleSubmit} className='form-inline'>
                <div >
                    <label>Account name</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={person}
                        className='form-control'
                    />
                </div>
                <div>
                    <label>Money saved</label>
                    <input
                        type="number"
                        onChange={handleMoneyChange}
                        value={money}
                        className='form-control'
                    />
                </div>
                <div>
                    <label>Savings group</label>
                    <input
                        type="string"
                        onChange={handleGroupChange}
                        value={enteredGroup}
                        className='form-control'
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add Record</button>
            </form>
            <h4>Available groups</h4>
            <ul>
                {group.map(result => (
                    <li key={result._id}>{result.groupName}</li>
                ))}
            </ul>
        </div>
    )

}
export default NewRecordForm
