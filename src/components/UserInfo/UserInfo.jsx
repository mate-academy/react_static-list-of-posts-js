import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return null; // або якийсь fallback
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
