import './UserInfo.scss';

export const UserInfo = ({ users }) => {
  const { email, name } = users;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {`${name}`}
      </a>
    </p>
  );
};
