import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';

export function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export function getComments(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}
