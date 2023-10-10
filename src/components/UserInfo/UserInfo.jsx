import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <p>
    {` Posted by  ${user.username}`}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
