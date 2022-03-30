import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendID} = useParams();

    const [friend, setFriend] = useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendID}`)
        .then(res=>res.json())
        .then(data=> setFriend(data));
    },[])
    return (
        <div>
            <h2>This is detail about : {friendID}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h6>Website:{friend.website}</h6>
            <p><small>City: {friend.address.city}</small></p>
        </div>
    );
};

export default FriendDetail;