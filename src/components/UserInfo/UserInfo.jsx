import React from 'react';

export const UserInfo = ({ user }) => (
  <a href={`mailto:${user.email}`} className="UserInfo user-info">
    <h3>{user.name}</h3>
  </a>
);
