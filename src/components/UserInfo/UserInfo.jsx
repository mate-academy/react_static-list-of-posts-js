export const UserInfo = ({ user }) => {
  const { email, name } = user;

  return (
    <p>
      {' Posted by  '}

      <a
        className="UserInfo"
        href={`mailto:${email}`}
      >
        {name}
      </a>
    </p>
  );
};
