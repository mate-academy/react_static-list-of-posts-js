import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <h3 className="UserInfo__name">{user.name}</h3>
    <a className="UserInfo__email" href={`mailto:${user.email}`}>
      {user.email}
    </a>
  </div>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
