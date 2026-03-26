import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <span className="UserInfo">Unknown user</span>;
  }

  return (
    <a href={`mailto:${user.email}`} className="UserInfo">
      {user.name}
    </a>
  );
};
