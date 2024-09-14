import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    <div className="UserInfo__name">{user.name}</div>
  </a>
);
