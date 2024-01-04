import usersFromServer from '../api/users.json';

export function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}
