import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  user.name !== undefined ? (
    <a href={`mailto:${user.email}`} className="UserInfo">
      {user.name}
    </a>
  ) : (
    <b>Anonymous</b>
  )
);
