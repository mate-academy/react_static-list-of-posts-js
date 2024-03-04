export const UserInfo = ({ user }) => {
  const { username, email } = user;

  return (
    <>
      <a className="UserInfo" href={email}>
        {username}
      </a>
    </>
  );
};
