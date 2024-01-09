import React from 'react';

export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    {user && (
      <a className="UserInfo__link" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )}
  </div>
);
