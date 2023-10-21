import './UserInfo.scss';

export const UserInfo = ({ user: { id, name, username, email } }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
