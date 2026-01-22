import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return 'Unknown User';
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
