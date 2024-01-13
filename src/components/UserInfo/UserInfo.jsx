import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a
    className="UserInfo"
    href={`mailto:${user.mail}`}
  >
    {user.name}
  </a>
);
