import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  // if (!user) return <span>Unknown User</span>;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
