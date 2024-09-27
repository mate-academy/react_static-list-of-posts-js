import './UserInfo.scss';

export const UserInfo = ({ user: { email, name } }) => {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
