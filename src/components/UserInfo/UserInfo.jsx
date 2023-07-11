import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <></>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
