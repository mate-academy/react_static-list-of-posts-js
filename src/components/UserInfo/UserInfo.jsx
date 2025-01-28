export const UserInfo = ({ user }) =>
  user ? (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  ) : (
    <span className="UserInfo">Unknown User</span>
  );
