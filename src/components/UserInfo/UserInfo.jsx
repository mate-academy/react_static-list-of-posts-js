export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.email}
  </a>
);
