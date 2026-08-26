import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email } = user || null;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
