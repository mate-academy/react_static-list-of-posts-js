import './UserInfo.scss';

export const UserInfo = ({ user: { email, name } }) => (
  <a
    className="UserInfo"
    href={email ? `mailto:${email}` : ''}
  >
    {name}
  </a>
);
