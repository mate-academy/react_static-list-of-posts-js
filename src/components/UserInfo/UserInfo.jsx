import './UserInfo.scss';

export const UserInfo = ({ users }) => (
  <a className="UserInfo" href={`mailto:${users.email}`}>
    {users.name}
  </a>
);
