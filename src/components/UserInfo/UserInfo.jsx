import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <p>{user.name}</p>
    <p>{user.email}</p>
  </div>
);
