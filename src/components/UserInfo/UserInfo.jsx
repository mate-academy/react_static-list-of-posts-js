import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return (
    <p>
      <span>Posted by </span>

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
