import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user || !user.name || !user.email) return null;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
