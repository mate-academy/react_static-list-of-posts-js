import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return (
    <p>
      {' Posted by  '}

      <a href={`mailto:${email}`} className="UserInfo">
        {name}
      </a>
    </p>
  );
};
