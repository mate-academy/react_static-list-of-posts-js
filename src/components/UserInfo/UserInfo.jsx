export const UserInfo = ({ user }) => {
  let mailToUser = 'mailto:' + user.email;

  return (
    <>
      <a className="UserInfo" href={mailToUser}>
        {user.name}
      </a>
    </>
  )
};
