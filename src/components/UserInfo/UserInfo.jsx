import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <p>No user data</p>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
