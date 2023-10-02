export const UserInfo = ({ user }) => (
  user.name && user.email ? (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  ) : 'unknown user'
);
