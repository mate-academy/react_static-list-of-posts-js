import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, username, email } = user;

  return (
    <p>
      {`Posted by ${username}`}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
