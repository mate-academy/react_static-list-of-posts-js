import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <p>
      {' Posted by  '}
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name ? user.name : 'Unknown user'}
      </a>
    </p>
  );
};
