import './UserInfo.scss';

export const UserInfo = ({ user, email }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {user}
  </a>
);
