import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export function getUsersById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export function getComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}
