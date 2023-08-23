import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

export default UserInfo;
