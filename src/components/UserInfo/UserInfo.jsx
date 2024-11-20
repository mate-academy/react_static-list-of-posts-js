import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return 'anonymous';
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
