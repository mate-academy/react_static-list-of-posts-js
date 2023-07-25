import './UserInfo.scss';

export const UserInfo = ({ user: { name, email } }) => (
  <p>
    <span>Posted by </span>
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
