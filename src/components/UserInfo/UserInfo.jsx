export const UserInfo = props => {
  const {
    user: { name, email },
  } = props;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
