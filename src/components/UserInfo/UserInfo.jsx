import './UserInfo.scss';

export const UserInfo = ({ user: { email, name } }) => (
  <div>
    <p className="User__title">Posted by</p>
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </div>
);
