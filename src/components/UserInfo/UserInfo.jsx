export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  if (!user.email) {
    return <p>{user.name}</p>;
  }

  if (!user.name) {
    return <p>{user.email}</p>;
  }

  // If both name and email are present, return a link with the user's name
  // that opens the email client when clicked
  // and displays the email address in the link text
  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
