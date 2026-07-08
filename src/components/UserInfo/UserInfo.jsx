import './UserInfo.scss';

export const UserInfo = ({ user: { username, email, name } }) => {
  return (
    <p>
      {`Posted by ${username}`}
      <br />
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
