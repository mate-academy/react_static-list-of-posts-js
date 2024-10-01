import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return (
    <a href={`mailto:${email}`} className="UserInfo">
      {name}
    </a>
  );
};
