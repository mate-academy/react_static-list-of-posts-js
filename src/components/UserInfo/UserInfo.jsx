/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-useless-fragment */

import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

