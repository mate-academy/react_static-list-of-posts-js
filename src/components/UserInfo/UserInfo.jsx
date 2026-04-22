import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    <b>{user?.name}</b>
  </a>
);
