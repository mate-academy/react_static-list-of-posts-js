import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <>
    {user.username}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </>
);
