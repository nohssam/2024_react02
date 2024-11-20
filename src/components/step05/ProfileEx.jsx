import React, { useState } from 'react';
import Profile from './Profile';
import './profileEx.css'

function ProfileEx({ name }) {
    const users = ['고길동', '둘리', '희동이']
    const [user, setUser] = useState(users[0])
    const [isStatus, setStatus] = useState(true)
    return (
        <div className='center'>
            <h2>User Profile</h2>
            <button onClick={() => setStatus(!isStatus)}>Toggle Status</button>
            <button onClick={() => setUser(
                users[(users.indexOf(user) + 1) % users.length]
            )}>Switch user</button>
            <p>
                상태 : {isStatus ? 'Active' : 'Inactive'}
            </p>
            <Profile name={user} />
        </div>
    );
}

export default ProfileEx;   