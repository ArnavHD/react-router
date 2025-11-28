import React from 'react';

const User = ({user}) => {
    const {name, username, email, phone} = user;
    const userStyle={
        border: '2px solid red',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
        </div>
    );
};

export default User;