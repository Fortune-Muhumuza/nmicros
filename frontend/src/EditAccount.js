import React, { useState, useEffect } from 'react'
import axios from 'axios'

function EditAccount(props) {

    const [accountInfo, setAccountInfo] = useState({})
    const [enteredMoney, setEnteredMoney] = useState(0)

    function handleMoneyChange(e) {
        setEnteredMoney(e.target.value)
    }

    function handleSubmit(e) {
        const enteredData = {
            moneySaved: enteredMoney
        };

        axios.put('http://localhost:4000/notes/' + props.match.params.id, enteredData)
        e.preventDefault()
        window.location = '/'
    }

    const getData = () => {
        axios.get(`http://localhost:4000/notes/` + props.match.params.id)
            .then(res => {
                const records = res.data;
                setAccountInfo(records)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Update account</h1>
            <form onSubmit={handleSubmit} className='form-inline'>
                <div >
                    <label>Account name</label>
                    <input
                        type="text"
                        value={accountInfo.accountName}
                        className='form-control'
                    />
                </div>
                <div>
                    <label>Money saved</label>
                    <input
                        type="number"
                        onChange={handleMoneyChange}
                        placeholder={accountInfo.moneySaved}
                        value={enteredMoney}
                        className='form-control'
                    />
                </div>
                <div>
                    <label>Savings group</label>
                    <input
                        type="string"
                        value={accountInfo.groupName}
                        className='form-control'
                    />
                </div>

                <button type="submit" className="btn btn-primary">Update Record</button>
            </form>
        </div>
    )
}

export default EditAccount
