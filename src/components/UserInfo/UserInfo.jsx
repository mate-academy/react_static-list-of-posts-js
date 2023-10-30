import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  user && user.email ? (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  ) : null
);
