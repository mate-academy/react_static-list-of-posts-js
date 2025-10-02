import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) return null;

  return (
    <p>
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user?.name || 'Unknown'}
      </a>
    </p>
  );
};
