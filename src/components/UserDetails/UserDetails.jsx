import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    const {website, name, company} = user;
    return (
        <div>
            <h3>User Details Here</h3>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default UserDetails;