export const UserInfo = ({ user }) => (
  <p>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
