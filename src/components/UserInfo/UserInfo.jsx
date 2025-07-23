import './UserInfo.scss';

export const UserInfo = ({ email, name }) => {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
