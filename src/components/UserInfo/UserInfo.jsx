import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const mailUser = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={mailUser}>
      {user.name}
    </a>
  );
};
