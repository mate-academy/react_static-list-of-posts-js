import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return (
    <article>
      <p>Posted by </p>

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </article>
  );
};
