// export const UserInfo = () => <>Put the user here</>;
import './UserInfo.scss';

const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};

export default UserInfo;
