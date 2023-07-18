import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return user && (
    <a
      className="UserInfo"
      href={`mailto:${email}`}
      title={name}
    >
      {name}
    </a>
  );
};
