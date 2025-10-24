export const UserInfo = ({ user }) => {
  if (!user) {
    return <p>No User</p>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
