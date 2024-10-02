import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  // const user = usersDatabase.find(el => el.id === userId);

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
