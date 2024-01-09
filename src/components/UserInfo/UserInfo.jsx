export const UserInfo = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`} key={user.id}>
      {user.name}
    </a>
  </p>
);
