import React from 'react';
import './UserInfo.scss';

function UserInfo({ user }) {
    return (
        <div className="UserInfo">
            <p className="UserInfo__name">{user.name}</p>
        </div>
    );
}

export default UserInfo;
