import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { email, name} = user
  const href = `mailto:${email}`;

  return (
    <a className="UserInfo" href={href}>
      {name}
    </a>
  );
};
