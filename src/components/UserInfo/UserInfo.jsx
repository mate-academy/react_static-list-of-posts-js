import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { email, name } = user;

  return (
    <a
      className="UserInfo"
      href={email !== undefined ? `mailto:${email}` : null}
    >
      {name}
    </a>
  );
};
