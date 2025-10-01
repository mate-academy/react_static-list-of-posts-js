import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <span className="UserInfo UserInfo--missing">Unknown user</span>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
