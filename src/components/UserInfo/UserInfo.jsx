import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <div className="UserInfo" href={`mailto:${user.email}`}>
    <div className="UserInfo__name">{user.name}</div>
  </div>
);
