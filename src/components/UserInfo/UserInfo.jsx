import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const userEmail = `mailto:${user.email}`;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={userEmail}>
        {user.name}
      </a>
    </p>
  );
};
