import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const u = user || null;

  return (
    <a className="UserInfo" href={u ? `mailto:${u.email}` : undefined}>
      {u ? u.name : 'Unknown'}
    </a>
  );
};
