import users from '../../api/users.json';
import './UserInfo.scss';

export const UserInfo = () => {
  return (
    <>
      {users.map(user => (
        <p key={user.id}>
          {' Posted by  '}

          <a className="UserInfo" href={user.email}>
            {user.name}
          </a>
        </p>
      ))}
    </>
  );
};
