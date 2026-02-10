import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <p>
    {' Posted by  '}

    {user ? (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    ) : (
      <span className="UserInfo__placeholder">Unknown User</span>
    )}
  </p>
);
