export const UserInfo = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  </p>
);
