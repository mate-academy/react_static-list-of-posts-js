import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <span className="UserInfo">Unknown user</span>;
  }

  if (!user.email) {
    return <span className="UserInfo">{user.name || 'Unknown user'}</span>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
