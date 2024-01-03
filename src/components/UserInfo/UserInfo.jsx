import './UserInfo.scss';

export const UserInfo = ({ user: { email, id, name } }) => (
  <a
    className="UserInfo"
    href={`mailto:${email}`}
    key={id}
  >
    {name}
  </a>
);
