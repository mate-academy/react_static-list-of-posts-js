import users from '../../api/users.json';
import './UserInfo.scss';

export const UserInfo = ({ currentPostUserId }) => {
  const currentUser = users.find(user => user.id === currentPostUserId);

  if (!currentUser) {
    return <p>User not found</p>;
  }

  return (
    <a
      key={currentUser.id}
      className="UserInfo"
      href={`mailto:${currentUser.email}`}
    >
      {currentUser.name}
    </a>
  );
};
