import './UserInfo.scss';

export function UserInfo({ user: { name, email } }) {
  const mailLink = `mailto:${email}`;

  return (
    <>
      <a className="UserInfo" href={mailLink}>
        {name}
      </a>
    </>
  );
}
