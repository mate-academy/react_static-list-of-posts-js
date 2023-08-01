import './UserInfo.scss';

export const UserInfo = ({ users }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${users.email}`}>
      {`${users.name}`}
    </a>
  </p>
);
