import './UserInfo.scss';

export const UserInfo = ({ user: { name, email } }) => (
  <p>
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
