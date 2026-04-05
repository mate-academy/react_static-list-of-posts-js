import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ info, user }) => {
  const data = info || user || {};

  return (
    <a className="UserInfo" href={`mailto:${data.email}`}>
      {data.name}
    </a>
  );
};
