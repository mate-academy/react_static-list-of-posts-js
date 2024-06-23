export const UserInfo = ({ user: { email, name } }) => {
  const emailHref = `mailto:${email}`;

  return (
    <a className="UserInfo" href={emailHref}>
      {name}
    </a>
  );
};
