import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <p>
    {'Posted by '}
    <a href={`mailto:${user.email}`} className="UserInfo">
      {user.name}
    </a>
  </p>
);
