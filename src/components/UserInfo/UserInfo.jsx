export const UserInfo = ({ user: { name, email, username } }) => {
  const newLocal = email === '';

  return newLocal ? (
    <span className="UserInfo">
      {name || (username || 'The user has not signed')}
    </span>

  ) : (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name || (username || 'The user has not signed')}
    </a>
  );
};
