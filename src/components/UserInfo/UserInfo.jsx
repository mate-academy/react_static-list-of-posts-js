export const UserInfo = ({ user }) => {
  const mailToUser = `mailto:${user.email}`;

  return (
    <>
      <a className="UserInfo" href={mailToUser}>
        {user.name}
      </a>
    </>
  );
};
