import './UserInfo.scss';

export const UserInfo = ({
  user: {
    name,
    email,
  },
}) => (
  <p>
    {' Posted by  '}

    <a
      className="UserInfo"
      target="_blank"
      rel="noreferrer"
      href={`mailto:${email}`}
    >
      {name}
    </a>
  </p>
);
