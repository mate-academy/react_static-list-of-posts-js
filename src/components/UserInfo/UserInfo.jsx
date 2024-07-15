import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <a className="UserInfo__email" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </div>
);

export { UserInfo };
