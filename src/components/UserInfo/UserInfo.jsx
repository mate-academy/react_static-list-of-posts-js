export const UserInfo = ({ user }) => {
  console.log(user);
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
