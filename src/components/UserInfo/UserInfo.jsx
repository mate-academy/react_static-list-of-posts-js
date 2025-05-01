// src/components/UserInfo.jsx
import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <div className="UserInfo">{user.name}</div>
);
