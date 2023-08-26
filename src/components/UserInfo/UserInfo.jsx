import './UserInfo.scss';

export const UserInfo = ({ user: { name, email } }) => (
  <a className="UserInfo" href={email}>
    {name}
  </a>
);
