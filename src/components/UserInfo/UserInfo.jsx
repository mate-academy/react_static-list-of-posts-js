import './UserInfo.scss';

export const UserInfo = ({ email, name }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
