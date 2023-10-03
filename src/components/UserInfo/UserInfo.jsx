export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return name && email ? (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  ) : 'unknown user';
};
