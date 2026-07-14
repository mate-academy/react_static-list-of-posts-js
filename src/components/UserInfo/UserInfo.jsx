import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  // Se não existir usuário, não renderiza nada.
  if (!user) return null;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
