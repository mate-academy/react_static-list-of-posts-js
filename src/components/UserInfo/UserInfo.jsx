import './UserInfo.scss';
import React from 'react';

export const UserInfo = ({ name, email }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
