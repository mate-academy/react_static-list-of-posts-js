import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const {
    name = 'unknown user',
    email = 'unknown email',
  } = user;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
