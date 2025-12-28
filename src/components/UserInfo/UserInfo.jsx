import users from '../../api/users.json';
import './UserInfo.scss';

export const UserInfo = () => {
  return (
    <>
      {users.map(user => (
        <p>
          {' Posted by  '}

          <a className="UserInfo" key={user.id} href={user.email}>
            {user.name}
          </a>
        </p>
      ))}
    </>
  );
};
