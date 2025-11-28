import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [visitHome, setVisitHome] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const {id, name, username, email, phone} = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json());

    const userStyle={
        border: '2px solid red',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }

    const location = useLocation();
    console.log(location);

    if(visitHome){
        return <Navigate to="/"></Navigate>
    }
    return (
      <div style={userStyle}>
        <h3>Name: {name}</h3>
        <h3>Username: {username}</h3>
        <h3>Email: {email}</h3>
        <h3>Phone: {phone}</h3>
        <Link to={`/users/${id}`}>Show Details</Link>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide" : "Show"} Info
        </button>
        {showInfo && (
          <Suspense fallback={<span>Loading...</span>}>
            <UserDetails2 userPromise={userPromise}></UserDetails2>
          </Suspense>
        )}
        <button onClick={()=>setVisitHome(true)}>Visit Home</button>
      </div>
    );
};

export default User;