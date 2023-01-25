import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './post.css'


function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        const intervalId = setInterval(fetchData, 300000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-gray-500 flex flex-col items-center justify-center h-screen ">
        <h1 className="text-lg font-medium text-center mb-2 mt-8">New Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
            {users.map(user => (
                <div key={user._id} className="bg-white p-2 rounded-lg flair  flex flex-col items-center">
                    <div className="text-md font-medium">{user.username}</div>
                    <div className="text-md font-light">{user.password}</div>
                </div>
            ))}
        </div>
        </div>
    );
}
 
export default UserList;
