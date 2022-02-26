import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AccountInfo.css'

function AccountInfo(props) {
    const [accountInfo, setAccountInfo] = useState({})

    const getData = () => {
        axios.get(`http://localhost:4000/notes/`+props.match.params.id)
            .then(res => {
                const records = res.data;
                console.log(records)
                setAccountInfo(records)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h3>Account info</h3>
            <div className="container card-body">
            <h4>{accountInfo.accountName}</h4>
            <p>Account balance: <b>{accountInfo.moneySaved}</b></p>
            <p>Money loaned: <b>56000</b></p>
            <p>Transactions made: <b>23</b></p>
            <p>Savings group: <b>{accountInfo.groupName}</b></p>
            </div>
        </div>
    )
}

export default AccountInfo
