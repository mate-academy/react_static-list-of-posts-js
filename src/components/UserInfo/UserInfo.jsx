import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user || !user.email || !user.name) {
    return (
      <div className="UserInfo">
        <p>User info incomplete or not found</p>
      </div>
    );
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
