import usersFromServer from './users.json';

export function getUser(userId) {
  return usersFromServer.find(user => user.id === userId);
}
