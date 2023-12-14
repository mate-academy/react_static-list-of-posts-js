import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <p>
    <span> Posted by </span>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
