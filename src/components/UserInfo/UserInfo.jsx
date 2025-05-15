export const UserInfo = ({ user }) => {
  if (!user || !user.email || !user.name) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
