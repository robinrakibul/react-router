import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> setFriends(data));
    },[])
    return (
        <div>
            <h2>Total Friends: {friends.length}</h2>
            {
                friends.map(friend=> <Friend key={friends.id} friend={friend} id={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;