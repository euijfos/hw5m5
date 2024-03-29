import React from 'react';
import {useSelector} from "react-redux";

const UserInfo = () => {

    const user = useSelector((state) => state.user)
    console.log(user)
    return (
        <div>
            <h1>User</h1>
            <div style={{display:'flex', flexDirection:'column', gap:'15px'}}>
                <strong>Name:{user.name}</strong>
                <strong>LastName:{user.lastName}</strong>
                <strong>Age:{user.age}</strong>
            </div>
        </div>
    );
};

export default UserInfo;