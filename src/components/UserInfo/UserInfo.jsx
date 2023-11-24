import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { email, name } = user;
  // if (!user) {
  //   return null;
  // }

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
