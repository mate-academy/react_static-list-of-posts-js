export const UserInfo = ({ user }) => {
  return (
    <p>
      {' Posted by  '}
      <a className="UserInfo" href={`malito: ${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
