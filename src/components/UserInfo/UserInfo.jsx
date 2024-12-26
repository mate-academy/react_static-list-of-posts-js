import './UserInfo.scss';

export const UserInfo = ({ infoUser }) => (
  <a className="UserInfo" href={`mailto:${infoUser.email}`}>
    {infoUser.name}
  </a>
);
