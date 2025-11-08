import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) return null;

  return (
    <div className="UserInfo" data-cy="UserInfo">
      <span className="UserInfo__name">{user.name}</span>{' '}
      <a className="UserInfo__email" href={`mailto:${user.email}`}>
        {user.email}
      </a>
    </div>
  );
};
