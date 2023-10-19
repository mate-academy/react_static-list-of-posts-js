export const UserInfo = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <>
      {` Posted by  `}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </>
  );
};
