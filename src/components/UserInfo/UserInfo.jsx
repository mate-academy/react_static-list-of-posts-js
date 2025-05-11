export const UserInfo = ({ user }) => {
  return (
    <a key={user.id} className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
