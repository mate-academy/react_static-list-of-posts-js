export const UserInfo = ({ userInfo }) => (
  <a className="UserInfo" href={`mailto:${userInfo.email}`}>
    {userInfo.name}
  </a>
);
