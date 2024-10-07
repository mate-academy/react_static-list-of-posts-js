import './UserInfo.scss';

export function UserInfo({ userInfo }) {
  const { name, email } = userInfo;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
}
