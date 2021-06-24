import React, { useState, useEffect } from 'react'
import axios from 'axios'

function GroupInfo(props) {
    const [groupInfo, setGroupInfo] = useState([])

    const getData = () => {
        axios.get(`http://localhost:4000/group/`+props.match.params.groupName)
            .then(res => {
                const records = res.data;
                console.log(records)
                setGroupInfo(records)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h3>{props.match.params.groupName} savings group members</h3>
            <div className="container card-body">
            {/* <h4>{groupInfo.accountName}</h4> */}
            <ul>
                {groupInfo.length > 0? groupInfo.map(record => (
                    <p key={record._id}>{record.accountName}</p>
                )):<p>No members in this group yet</p>}
            </ul>
            </div>
        </div>
    )
}

export default GroupInfo
