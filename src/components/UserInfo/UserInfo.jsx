import React from 'react';

export const UserInfo = ({ user }) => (
  <div className="user-container">
    <p className="UserInfo">{user.name}</p>
    <a href={`mailto:${user.email}`} className="UserEmail">
      ({user.email})
    </a>
  </div>
);
