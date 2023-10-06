
import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';

export function getUserId(idUser) {
  return usersFromServer.find(user => user.id === idUser) || null;
}

export function getCommentId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}
