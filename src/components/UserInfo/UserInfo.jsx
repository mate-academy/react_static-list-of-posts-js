import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <p>
      {` Posted by ${user.username} `}

      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
