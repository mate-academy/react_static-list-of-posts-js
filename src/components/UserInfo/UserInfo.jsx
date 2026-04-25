import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <span className="UserInfo">Unknown user</span>;
  }

  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
