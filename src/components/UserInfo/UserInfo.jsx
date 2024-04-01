import './UserInfo.scss';
import usersFromServer from '../../api/users.json';

export const UserInfo = ({ userId }) => {
  let user;

  if (usersFromServer.some(el => el.id === userId)) {
    user = usersFromServer.find(el => el.id === userId);
  }

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
