import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
    const {name, username} = use(userPromise);
   
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>User Name: {username}</h1>
    </div>
  );
};

export default UserDetails2;