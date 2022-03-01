import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";



const socket = io.connect('http://localhost:4000')

function Dashboard() {
    const [onlineUsers, setOnlineUsers] = useState(0)

    socket.on('online users', function (onlineUsers) {
        setOnlineUsers(onlineUsers.numberOfOnlineUsers)
    });

    useEffect(() => {
        console.log('number of online users is', onlineUsers)
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <h5>Online users: </h5><p>{onlineUsers}</p>
        </div>

    )
}

export default Dashboard