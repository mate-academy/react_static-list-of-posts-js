export const UserInfo = ({ user }) => {
  const mailTo = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={mailTo}>
      {user.name}
    </a>
  );
};
