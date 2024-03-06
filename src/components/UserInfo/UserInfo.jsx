export const UserInfo = ({ IdOfUser, Users }) => {
  const user = Users.find(given => given.id === IdOfUser);

  return (
    <p>
      Posted by
      <a href={`mailto:${user.email}`} className="UserInfo">
        {` ${user.name}`}
      </a>
    </p>
  );
};
