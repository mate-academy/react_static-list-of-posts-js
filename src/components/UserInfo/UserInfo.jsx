export const UserInfo = ({ info }) => (
  <a className="UserInfo" href={`mailto:${info.email}`}>
    {info.user.name}
  </a>
);
