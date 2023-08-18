import './UserInfo.scss';

export const UserInfo = ({ user: { username, name, email } }) => (
  <p>
    {` Posted by `}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
