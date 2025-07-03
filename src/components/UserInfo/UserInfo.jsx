import './UserInfo.scss';

export const UserInfo = ({ email, children }) => (
  <a className="UserInfo__email" href={`mailto:${email}`}>
    {children || email}
  </a>
);
