import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  const { name: userName, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {userName}
    </a>
  );
};
