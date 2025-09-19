import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) return <span>Unknown author</span>;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
