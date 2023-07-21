export const UserInfo = ({ user, user: { email, name } }) => (
  user ? (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  ) : (
    <span className="UserInfo">Autor is unknown</span>
  )
);
