import React from 'react'
import { useEffect, useState } from 'react';

const CarPost = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('http://localhost:1234/demo', {
            method: 'GET',
        })
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div>
            <ul>
                {users.map(user => <li key={user._id}>{user.username},{user.number}</li>)}
            </ul>
        </div>
    )
}

export default CarPost
