import './UserInfo.scss';

export const UserInfo = ({ user: { email, name } }) => (
  <p>
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
