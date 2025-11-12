import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return 'User does not exist anymore';
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  )
};
