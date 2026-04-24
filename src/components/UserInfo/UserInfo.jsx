import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <div>User not found</div>;
  }

  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
