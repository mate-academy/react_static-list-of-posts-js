import usersFromServer from '../../api/users.json';

export const UserInfo = ({ userId }) => (
  <a className="UserInfo" href={`mailto:${usersFromServer.filter(item => item.id === userId)[0].email}`}>
    {usersFromServer.filter(item => item.id === userId)[0].name}
  </a>
);
