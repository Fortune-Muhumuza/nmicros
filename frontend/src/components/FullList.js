import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './FullList.css'


export default function FullList() {


    const [records, setRecords] = useState([])


    const getData = () => {
        axios.get(`http://localhost:4000/notes`)
            .then(res => {
                const records = res.data;
                setRecords(records)
            })
    }



    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div className="form-group">
            <input type="text" placeholder="Search" value="" />
            <button className="primary-btn">Search</button>
            </div>
            <h3>Accounts current status</h3>
            <table className="table table-bordered table-hover">
                <thead className="bg-primary">
                    <tr>
                        <th>Account Name</th>
                        <th >Money available</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {records.length > 0?records.map(record => (
                    <tbody>
                        <tr >
                            <td ><Link to={"/notes/" + record._id}>{record.accountName}</Link></td>
                            <td className="money">{record.moneySaved}</td>
                            <td><p><Link to={"/editAccount/" + record._id}>Update account</Link></p><p><Link to={"/deleteAccount/" + record._id}>Delete</Link></p></td>
                        </tr>
                    </tbody> 


                )):<h4>Sorry, there are no records currently, enter some data first</h4>}
            </table>


        </div>
    )
}
