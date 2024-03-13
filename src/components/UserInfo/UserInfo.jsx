import users from '../../api/users.json';
import './UserInfo.scss';

export function UserInfo({ userId }) {
  const targetUser = users.find(user => user.id === userId);

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${targetUser.email}`}>
        {targetUser.name}
      </a>
    </p>
  );
}
