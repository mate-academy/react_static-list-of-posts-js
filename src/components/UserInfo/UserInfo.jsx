export const UserInfo = ({ user }) => {
  const mailto = `mailto:${user.email}`;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={mailto}>
        {user.name}
      </a>
    </p>
  );
};
