import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { email, name } = user;

  return (
    <a href={`mailto:${email}`} className="UserInfo">
      {name}
    </a>
  );
};
