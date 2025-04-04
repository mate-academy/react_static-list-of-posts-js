import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  return (
    <a className="UserInfor" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
