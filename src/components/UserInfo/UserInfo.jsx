// export const UserInfo = () => <>Put the user here</>;
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
