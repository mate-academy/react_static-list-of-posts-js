import './UserInfo.scss';

export const UserInfo = ({ user, className }) => (
  <a className={`UserInfo ${className || ''}`} href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
