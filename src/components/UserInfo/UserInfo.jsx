import './UserInfo.scss';

export const UserInfo = ({ user }) =>
  !user ? (
    <span className="UserInfo">Unknown user</span>
  ) : (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );

/* export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
); */
