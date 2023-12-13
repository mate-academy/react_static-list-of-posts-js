import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <p>
      <span> Posted by </span>
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
