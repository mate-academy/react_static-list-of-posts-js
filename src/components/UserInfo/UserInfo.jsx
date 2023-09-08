import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={user.email}>
    {user.name}
    {user.username}
  </a>
);
