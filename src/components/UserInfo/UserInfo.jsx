import './UserInfo.scss';

export const UserInfo = (
  {
    user: { email, name },
  },
) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
