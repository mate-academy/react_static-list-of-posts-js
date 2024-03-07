import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (user === null || user === undefined) {
    return null;
  }

  return (
    <>
      <a className="UserInfo" href={`mailto:${user.email || ''}`}>
        {user.name || ''}
      </a>
    </>
  );
};
