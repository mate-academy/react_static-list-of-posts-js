export const UserInfo = ({ user }) => {
  const userEmail = `mailto:${user.email}`;

  return (
    <p>
      {user.name}

      <a className="UserInfo" href={userEmail}>
        {user.name}
      </a>
    </p>
  );
};
