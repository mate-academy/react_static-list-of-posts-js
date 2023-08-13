import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email: userEmail } = user;

  return (
    <a className="UserInfo" href={`mailto:${userEmail}`}>
      {name}
    </a>
  );
};
