import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email } = user;
  const mailto = `mailto:${email}`;

  return (
    <a className="UserInfo" href={mailto}>
      {name}
    </a>
  );
};
