import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firestore';
import axios from 'axios'
import './FullList.css'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from '../store/reducers/usersSlice';



export default function FullList() {

    const dispatch = useDispatch()
    const loadingStatus = useSelector(state => state.users.status)
    const records = useSelector(state => state.users.records)





    useEffect(() => {
        if (loadingStatus === 'idle') {
            dispatch(setUsers())
        }
    }, [loadingStatus])



    let content

    if (loadingStatus === 'loading') {
        content = <div className="lds-dual-ring">Loading...</div>
    } else if (loadingStatus === 'succeeded') {
        // Sort posts in reverse chronological order by datetime string
        const renderedDetails = records

        content = renderedDetails.map(renderedDetail => (

            <tbody>
                <tr >
                    <td ><Link to={"/notes/" + renderedDetail._id}>{renderedDetail.accountName}</Link></td>
                    <td className="money">{renderedDetail.moneySaved}</td>
                    <td><p><Link to={"/editAccount/" + renderedDetail._id}>Update account</Link></p><p><Link to={"/deleteAccount/" + renderedDetail._id}>Delete</Link></p></td>
                </tr>
            </tbody>
        ))
    } else if (loadingStatus === 'failed') {
        content = <div>Sorry there was a problem</div>
    }



    return (
        <div>
            <div className="form-group">
                <input type="text" placeholder="Search" value="" />
                {/* <button className="primary-btn">Search</button> */}
                <Button variant="contained">Search</Button>
            </div>
            <h3>Active accounts</h3>
            <table className="table table-bordered table-hover">
                <thead className="bg-primary">
                    <tr>
                        <th>Account Name : </th>
                        <th >Account balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
{content}
            </table>


        </div>
    )
}
