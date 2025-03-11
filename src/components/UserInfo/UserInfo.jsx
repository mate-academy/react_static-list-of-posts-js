import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href="mailto:Sincere@april.biz">
    {user.email}
  </a>
);
