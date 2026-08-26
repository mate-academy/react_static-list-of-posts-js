import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const mailUrl = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={mailUrl}>
      {user.name}
    </a>
  );
};
