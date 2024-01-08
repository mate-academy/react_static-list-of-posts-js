import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const {
    email,
    id,
    name,
  } = user;

  return (
    <a
      className="UserInfo"
      href={`mailto:${email}`}
      key={id}
    >
      {name}
    </a>
  );
};
