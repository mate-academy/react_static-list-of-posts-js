import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) return null;

  const { name, email } = user;

  return (
    <a href={`mailto:${email}`} className="UserInfo">
      <span className="UserInfo__name">{name}</span>
    </a>
  );
};

export default UserInfo;